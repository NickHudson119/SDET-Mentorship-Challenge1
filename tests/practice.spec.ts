import { test } from '../fixtures/fixtures';
import { expect } from '../utils/customExpect';
import uiData from '../testData/data.json'

test.beforeEach(async ({ practicePage }) => {
    await practicePage.open();
});


for (const scenario of uiData.formScenarios) {
    test(`fill practice form for ${scenario.name}`, async ({ practicePage }) => {
        await practicePage.nameInput.fill(scenario.name);
        await expect(practicePage.nameInput).toHaveExpectedValue(scenario.name);

        await practicePage.countryDropdown.selectOption(scenario.country);
        await expect(practicePage.countryDropdown).toHaveValue(scenario.country);

        await practicePage.sundayCheckbox.check();
        await expect(practicePage.sundayCheckbox).toBeChecked();

        await practicePage.addressInput.fill(scenario.address);
        await expect(practicePage.addressInput).toHaveValue(scenario.address);
    });
}

