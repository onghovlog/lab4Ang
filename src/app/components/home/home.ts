import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  private productService = inject(ProductService);

  // Signal chứa danh sách sản phẩm lấy từ Backend API (NodeJS + MongoDB)
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  errorMessage = signal<string>('');

  // Sản phẩm mới: sắp xếp theo ID giảm dần, lấy 4 sản phẩm
  newProducts = computed(() =>
    [...this.products()]
      .sort((a, b) => b.id - a.id)
      .slice(0, 4)
  );

  // Sản phẩm khuyến mãi: lọc sản phẩm có discount > 0, sắp xếp giảm dần theo discount
  saleProducts = computed(() =>
    [...this.products()]
      .filter((p) => p.discount > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 4)
  );

  // Sản phẩm bán chạy: sắp xếp theo số lượng bán (sold) giảm dần
  bestSellingProducts = computed(() =>
    [...this.products()]
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 4)
  );

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading.set(true);
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi khi tải sản phẩm từ backend:', err);
        this.errorMessage.set('Không thể kết nối đến server backend.');
        this.isLoading.set(false);
      }
    });
  }
}
