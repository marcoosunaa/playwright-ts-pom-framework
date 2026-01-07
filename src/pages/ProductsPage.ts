import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ProductCard } from './components/ProductCard';
export class ProductsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private items(): Locator {
    return this.page.locator('.inventory_item');
  }

  get cartBadge(): Locator {
    return this.page.locator('.shopping_cart_badge');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  // --- Lógica de Componentes ---

  /**
   * Crea una instancia de ProductCard basada en el nombre del producto
   */
  productCardByName(name: string): ProductCard {
    const item = this.items().filter({ hasText: name }).first();
    return new ProductCard(this.page, item);
  }

  /**
   * Retorna todas las tarjetas como componentes
   */
  async getProductCards(): Promise<ProductCard[]> {
    const locators = await this.items().all();
    return locators.map(loc => new ProductCard(this.page, loc));
  }

  // --- Métodos de Acción (Delegados al componente) ---

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