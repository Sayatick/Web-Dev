import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;

  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
    localStorage.setItem(`likes_${this.product.id}`, String(this.product.likes));
  }  

  deleteProduct() {
    this.delete.emit(this.product.id);
  }


  mainImage = '';

  ngOnInit() {
    this.mainImage = this.product.image;
  
    const saved = localStorage.getItem(`likes_${this.product.id}`);
    if (saved !== null) this.product.likes = Number(saved);
  }  

  setMainImage(img: string) {
    this.mainImage = img;
  }

  openKaspi() {
    window.open(this.product.link, '_blank');
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=Check%20out%20this%20product:%20${url}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  stars() {
    const full = Math.floor(this.product.rating);
    const half = this.product.rating - full >= 0.5;
    return { full, half };
  }
}