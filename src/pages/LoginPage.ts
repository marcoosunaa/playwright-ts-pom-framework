import { Page, Locator } from '@playwright/test';
import { UserCreds } from '../data/Users';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/');
  }

  private usernameField() {
    return this.page.locator('#user-name');
  }

  private passwordField() {
    return this.page.locator('#password');
  }

  private loginButton() {
    return this.page.locator('#login-button');
  }

  async login(user: UserCreds) {
    await this.usernameField().fill(user.username);
    await this.passwordField().fill(user.password);
    await this.loginButton().click();
  }

  async getErrorText() {
    const locator = this.page.locator('[data-test="error"]');
    return locator.textContent();
  }

  get title(): Locator {
    return this.page.locator('.title');
  }
}
