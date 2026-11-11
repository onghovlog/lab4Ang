import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  standalone: true,
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  private productService = inject(ProductService);

  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  selectedCategory = signal<string>('all');
  selectedSort = signal<string>('newest');

  categories = [
    { id: 'all', name: '🌸 Tất cả' },
    { id: 'congrats', name: '🎉 Hoa chúc mừng' },
    { id: 'wedding', name: '💍 Hoa cưới' },
    { id: 'birthday', name: '🎂 Hoa sinh nhật' },
    { id: 'opening', name: '🏢 Hoa khai trương' },
    { id: 'love', name: '❤️ Hoa tình yêu' },
    { id: 'condolence', name: '🕊️ Hoa chia buồn' },
  ];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading.set(true);
    const category = this.selectedCategory();
    const sort = this.selectedSort();

    this.productService.getProducts({ category, sort }).subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi khi tải sản phẩm:', err);
        this.isLoading.set(false);
      },
    });
  }

  onSelectCategory(catId: string): void {
    this.selectedCategory.set(catId);
    this.loadProducts();
  }

  onSelectSort(sortType: string): void {
    this.selectedSort.set(sortType);
    this.loadProducts();
  }
}
