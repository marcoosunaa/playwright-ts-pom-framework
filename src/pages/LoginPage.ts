import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage'; // Importación necesaria
import { UserCreds } from '../data/Users';

export class LoginPage extends BasePage {
  
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('/');
  }

  private usernameField() {
    return this.page.locator('#user-name');
  }

  private passwordField() {
    return this.page.locator('#password');
  }

  get loginButton(): Locator {
    return this.page.locator('#login-button');
  }

  async login(user: UserCreds) {
    await this.usernameField().fill(user.username);
    await this.passwordField().fill(user.password);
    await this.loginButton.click();
  }

    async getErrorText() {
    const locator = this.page.locator('[data-test="error"]');
    return locator.textContent();
  }
}