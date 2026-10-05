import { test } from '../fixtures/fixtures';
import { expect } from '../utils/customExpect';

test.beforeEach(async ({ practicePage }) => {
    await practicePage.open();
});


test('enter name in practice form', async ({ practicePage }) => {

    await practicePage.nameInput.fill('Nick');
    await expect(practicePage.nameInput).toHaveExpectedValue('Nick');

    await practicePage.countryDropdown.selectOption('united-states')
    await expect(practicePage.countryDropdown).toHaveValue('united-states')

    await practicePage.sundayCheckbox.check()
    await expect(practicePage.sundayCheckbox).toBeChecked()

    await practicePage.addressInput.fill('123 Main Street');
    await expect(practicePage.addressInput).toHaveValue('123 Main Street')
});

