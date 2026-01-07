import { test, expect } from '../../src/fixtures/page-objects';

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
    await expect(productsPage.cartBadge).toHaveText('1');
  });

  test('open product details from product card', async ({ productsPage }) => {
    await productsPage.openProductByName('Sauce Labs Backpack');
  });
});
