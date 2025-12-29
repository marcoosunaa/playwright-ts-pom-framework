import { test as base } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';

// Define types for our pages
type MyFixtures = {
  loginPage: LoginPage;
};

// Extend the base test with fixtures
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); // Optional: navigate automatically
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
