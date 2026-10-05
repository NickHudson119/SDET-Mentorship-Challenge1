import { test, expect } from '@playwright/test'
import { PracticePage } from '../POM/PracticePage';

test('enter name in practice form', async ({ page }) => {
    const practicePage = new PracticePage(page);

    await practicePage.open();

    await practicePage.nameInput.fill('Nick');
    await expect(practicePage.nameInput).toHaveValue('Nick');

    await practicePage.countryDropdown.selectOption('united-states')
    await expect(practicePage.countryDropdown).toHaveValue('united-states')

    await practicePage.sundayCheckbox.check()
    await expect(practicePage.sundayCheckbox).toBeChecked()

    await practicePage.addressInput.fill('123 Main Street');
    await expect(practicePage.addressInput).toHaveValue('123 Main Street')
});

