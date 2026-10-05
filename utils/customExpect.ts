import { expect as baseExpect } from '@playwright/test';

export const expect = baseExpect.extend({
    async toHaveExpectedValue(locator, expectedValue: string) {
        const assertion = baseExpect(locator);

        await assertion.toHaveValue(expectedValue);

        return {
            pass: true,
            message: () => `Expected value to be ${expectedValue}`,
        };
    },
});

declare module '@playwright/test' {
    interface Matchers<R> {
        toHaveExpectedValue(expectedValue: string): R;
    }
}