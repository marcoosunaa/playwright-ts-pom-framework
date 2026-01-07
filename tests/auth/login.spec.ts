import { test, expect } from '../../src/fixtures/page-objects';
import { Users } from '../../src/data/Users';
import { ErrorMessages } from '../../src/data/Errors';

test.describe('Login Feature - Sauce Demo', () => {
  test('successful login with standard_user, then logout', async ({ loginPage, productsPage }) => {
    await loginPage.login(Users.standard_user);
    await expect(productsPage.title).toHaveText('Products');
    await productsPage.navBar.logout();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('login with invalid credentials shows error', async ({ loginPage }) => {
    await loginPage.login(Users.invalid_user);
    expect(await loginPage.getErrorText()).toContain(ErrorMessages.invalidCredentials);
  });
});