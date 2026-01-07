import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { AboutPage } from '../pages/AboutPage';

type PageObjects = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
  aboutPage: AboutPage;
};

export const test = base.extend<PageObjects>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto(); 
    await use(loginPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  aboutPage: async ({ page }, use) => {
    const aboutPage = new AboutPage(page);
    await use(aboutPage);
  },
});

export { expect } from '@playwright/test';
