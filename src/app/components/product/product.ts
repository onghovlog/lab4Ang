import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  imports: [RouterLink],
  selector: 'app-product',
  standalone: true,
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class ProductComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product = signal<Product | null>(null);
  isLoading = signal<boolean>(true);
  notFound = signal<boolean>(false);

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadProduct(id);
      }
    });
  }

  loadProduct(id: string): void {
    this.isLoading.set(true);
    this.notFound.set(false);

    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Lỗi khi tải chi tiết sản phẩm:', err);
        this.notFound.set(true);
        this.isLoading.set(false);
      },
    });
  }
}

export { ProductComponent as Product };
