import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.filteredProducts =
      this.productService.getProductsByCategory(categoryId);
  }
  handleDelete(productId: number) {
    this.productService.deleteProduct(productId);
  
    if (this.selectedCategoryId !== null) {
      this.filteredProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }  
}