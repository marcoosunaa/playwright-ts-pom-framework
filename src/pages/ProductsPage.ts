import { Page, Locator } from '@playwright/test';
import { ProductCard } from './components/ProductCard';
import { LoggedInPage } from './LoggedInPage';

export class ProductsPage extends LoggedInPage {
  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await super.goto('/inventory.html'); 
  }

  private items(): Locator {
    return this.page.locator('.inventory_item');
  }

  productCardByName(name: string): ProductCard {
    const item = this.items().filter({ hasText: name }).first();
    return new ProductCard(this.page, item);
  }

  async getProductCards(): Promise<ProductCard[]> {
    const locators = await this.items().all();
    return locators.map(loc => new ProductCard(this.page, loc));
  }

  async getProductPrice(name: string): Promise<string> {
    const card = this.productCardByName(name);
    return await card.getPrice(); 
  }

  async addToCartByName(name: string) {
    const card = this.productCardByName(name);
    await card.addToCart();
  }

  async openProductByName(name: string) {
    const card = this.productCardByName(name);
    await card.openDetails(); 
  }

  // Métodos de utilidad adicionales
  async getNumberOfProducts(): Promise<number> {
    return await this.items().count();
  }
}