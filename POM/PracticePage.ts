import { Page, Locator } from '@playwright/test';

export class PracticePage {
    readonly nameInput: Locator;
    readonly countryDropdown: Locator;
    readonly sundayCheckbox: Locator;
    readonly addressInput: Locator;

    constructor(private page: Page) {
        this.nameInput = this.page.locator('#name');
        this.countryDropdown = this.page.locator('#country');
        this.sundayCheckbox = this.page.locator('#day-sunday');
        this.addressInput = this.page
                                .locator('div')
                                .filter({ has: this.page.locator('label[for="address"]') })
                                .locator('#address');
    }

    async open() {
        await this.page.goto('https://www.playwrightautomation.com/practice.html');
    }
}