import {
    Given,
    When,
    Then,
    Before,
    After,
    setDefaultTimeout
} from '@cucumber/cucumber'

import { chromium, Browser, Page, expect } from '@playwright/test';
import { PracticePage } from '../../POM/PracticePage';
import uiData from '../../testData/data.json';

setDefaultTimeout(30_000);

let browser: Browser;
let page: Page;
let practicePage: PracticePage;

Before(async function () {
    browser = await chromium.launch();
    page = await browser.newPage()
    practicePage = new PracticePage(page)
});

After(async function () {
    try {
        if (browser) {
            await browser.close();
        }
    } catch (error) {
        console.error('Failed to close the browser', error)
        throw error
    } finally {
        browser = undefined as unknown as Browser
    }
})

Given('I open the practice form', async function () {
    await practicePage.open();
});

When('I enter my name', async function () {
    await practicePage.nameInput.fill(uiData.name);
});

Then('my name should appear in the name field', async function () {
    await expect(practicePage.nameInput).toHaveValue(uiData.name);
});
