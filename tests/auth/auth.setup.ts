import { test as setup, expect } from '../../src/fixtures/page-objects';
import { Users } from '../../src/data/Users';

const authFile = 'playwright/.auth/user.json';

setup('authenticate user', async ({ page, loginPage }) => {
  await loginPage.login(Users.standard_user);
  
  // Verify login was successful
  await expect(loginPage.title).toHaveText('Products');
  
  // Save the authenticated state
  await page.context().storageState({ path: authFile });
});
