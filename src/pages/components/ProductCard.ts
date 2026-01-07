import { Page, Locator } from '@playwright/test';

export class ProductCard {
  private readonly title: Locator;
  private readonly price: Locator;
  private readonly description: Locator;
  private readonly actionButton: Locator;

  constructor(private readonly page: Page, private readonly root: Locator) {
    this.title = this.root.locator('.inventory_item_name');
    this.price = this.root.locator('.inventory_item_price');
    this.description = this.root.locator('.inventory_item_desc');
    this.actionButton = this.root.locator('button');
  }

  async getTitle() {
    return await this.title.innerText();
  }

  async getPrice() {
    return await this.price.innerText();
  }

  async addToCart() {
    const text = await this.actionButton.innerText();
    if (text.toLowerCase().includes('add')) {
      await this.actionButton.click();
    }
  }

  async removeFromCart() {
    const text = await this.actionButton.innerText();
    if (text.toLowerCase().includes('remove')) {
      await this.actionButton.click();
    }
  }

  async openDetails() {
    await this.title.click();
  }
}