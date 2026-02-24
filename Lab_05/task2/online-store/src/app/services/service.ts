import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [...PRODUCTS];

  getCategories(): Category[] {
    return CATEGORIES;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}