import { test, expect } from '../../src/fixtures/page-objects';
import { AboutPage } from '../../src/pages/AboutPage';

test.describe('Products Page - Sauce Demo', () => {
  test.beforeEach(async ({ productsPage }) => {
    await productsPage.goto();
  });

  test('shows product list after login', async ({ productsPage }) => {
    const count = await productsPage.getNumberOfProducts();
    expect(count).toBeGreaterThan(0);
  });

  test('adding a product updates cart badge', async ({ productsPage }) => {
    await productsPage.addToCartByName('Sauce Labs Backpack');
    await expect(productsPage.navBar.cartBadgeLocator).toHaveText('1'); // '1' como string
  });

  test('open product details from product card', async ({ productsPage }) => {
    await productsPage.openProductByName('Sauce Labs Backpack');
  });

  test('navigate to about page via navbar', async ({ productsPage, aboutPage }) => {
    await productsPage.navBar.gotoAbout();
    await aboutPage.titleContains('Sauce Labs');
  });
});
