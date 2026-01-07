import { Page, Locator } from '@playwright/test';

export class NavBar {
  private readonly menuButton: Locator;
  private readonly allItemsButton: Locator;
  private readonly aboutButton: Locator;
  private readonly logoutButton: Locator;
  private readonly resetAppStateButton: Locator;
  private readonly shoppingCartLink: Locator;
  private readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.menuButton = this.page.locator('#react-burger-menu-btn');
    this.allItemsButton = this.page.locator('#inventory_sidebar_link');
    this.aboutButton = this.page.locator('#about_sidebar_link');
    this.logoutButton = this.page.locator('#logout_sidebar_link');
    this.resetAppStateButton = this.page.locator('#reset_sidebar_link');
    this.shoppingCartLink = this.page.locator('.shopping_cart_link');
    this.cartBadge = this.page.locator('.shopping_cart_badge');
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutButton.click();
  }

  async gotoAllItems() {
    await this.openMenu();
    await this.allItemsButton.click();
  }

  async gotoAbout() {
    await this.openMenu();
    await this.aboutButton.click();
  }

  async resetAppState() {
    await this.openMenu();
    await this.resetAppStateButton.click();
  }

  get cartBadgeLocator(): Locator {
    return this.cartBadge;
  }

  async gotoCart() {
    await this.shoppingCartLink.click();
  }
}