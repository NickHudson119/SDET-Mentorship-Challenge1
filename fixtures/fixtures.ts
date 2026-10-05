import { test as base } from '@playwright/test';
import { PracticePage } from '../POM/PracticePage';

type Fixtures = {
    practicePage: PracticePage;
};

export const test = base.extend<Fixtures>({
    practicePage: async ({ page }, use) => {
        const practicePage = new PracticePage(page);

        await use(practicePage);

    },
});