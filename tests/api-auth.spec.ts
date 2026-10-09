import { test, expect } from '@playwright/test';
import { LoginResponse } from '../models/LoginResponse';
import { VerifyResponse } from '../models/VerifyResponse';
import apiData from '../testData/apiData.json';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponseSchema } from '../models/LoginResponseSchema';
import { VerifyResponseSchema } from '../models/VerifyResponseSchema';

test('login API', async ({ request }) => {
    const response = await request.post('https://www.playwrightautomation.com/api/auth/login', {
        data: {
            email: apiData.validLogin.email,
            password: apiData.validLogin.password
        }
    });

    expect(response.status()).toBe(200)

    const responseBody: LoginResponse = await response.json();

    LoginResponseSchema.parse(responseBody)

    expect(responseBody.token).toBeTruthy();
    expect(responseBody.user.email).toBe('student@playwrightautomation.com');
});

test('Verify authenticated user API', async ({ request }) => {
    const loginResponse = await request.post('https://www.playwrightautomation.com/api/auth/login', {
        data: {
            email: apiData.validLogin.email,
            password: apiData.validLogin.password
        }
    })

    expect(loginResponse.status()).toBe(200);

    const loginBody: LoginResponse = await loginResponse.json()

    const verifyResponse = await request.get('https://www.playwrightautomation.com/api/auth/verify', {
    headers: {
        Authorization: `Bearer ${loginBody.token}`
    }
});

    expect(verifyResponse.status()).toBe(200);

    const verifyBody: VerifyResponse = await verifyResponse.json();

    VerifyResponseSchema.parse(verifyBody);

    expect(verifyBody.valid).toBe(true);
})

test('customer cannot access admin API', async ({ request }) => {
    const loginResponse = await request.post('https://www.playwrightautomation.com/api/auth/login', {
        data: {
            email: 'student@playwrightautomation.com',
            password: 'Password123'
        }
    });

    expect(loginResponse.status()).toBe(200);

    const loginBody: LoginResponse = await loginResponse.json();

    const response = await request.get('https://www.playwrightautomation.com/api/admin/dashboard-stats', {
    headers: {
        Authorization: `Bearer ${loginBody.token}`
    }
});

    expect(response.status()).toBe(apiData.expectedAdminStatus);

    const responseBody = await response.json();

    expect(responseBody.error).toBe('Insufficient permissions')
});

for (const scenario of apiData.loginScenarios) {
    test(`login API - ${scenario.valid ? 'valid' : 'invalid'} credentials`, async ({ request }) => {

        const loginData: LoginRequest = {
            email: scenario.email,
            password: scenario.password
        };

        const repsonse = await request.post('https://www.playwrightautomation.com/api/auth/login', {
            data: loginData
        })

        expect(repsonse.status()).toBe(scenario.expectedStatus);

        const responseBody = await repsonse.json();

        if(scenario.valid) {
            expect(responseBody.token).toBeTruthy();
        } else {
            expect(responseBody.error).toBe('Invalid credentials')
        }
    });
}