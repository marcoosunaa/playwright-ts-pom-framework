import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { NavBar } from './components/NavBar';

export class LoggedInPage extends BasePage {
  readonly navBar: NavBar;

  constructor(page: Page) {
    super(page);
    this.navBar = new NavBar(page);
  }

  get title(): Locator {
    return this.page.locator('.title');
  }
}