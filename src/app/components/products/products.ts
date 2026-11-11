import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  imports: [RouterLink],
  selector: 'app-products',
  standalone: true,
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(true);
  selectedCategorySlug = signal<string>('tat-ca');
  currentCategoryTitle = signal<string>('Tất cả hoa tươi');
  selectedSort = signal<string>('newest');

  ngOnInit(): void {
    // 1. Tải danh sách danh mục sắp xếp theo order
    this.categoryService.getCategories().subscribe({
      next: (cats) => {
        this.categories.set(cats);
        this.updateCategoryTitle(this.selectedCategorySlug());
      },
      error: (err) => {
        console.error('Lỗi khi tải danh mục:', err);
      },
    });

    // 2. Lắng nghe thay đổi tham số slug trên URL chuyển trang
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || 'tat-ca';
      this.selectedCategorySlug.set(slug);
      this.updateCategoryTitle(slug);
      this.loadProducts();
    });
  }

  updateCategoryTitle(slug: string): void {
    if (slug === 'tat-ca') {
      this.currentCategoryTitle.set('Tất cả hoa tươi');
      return;
    }
    const found = this.categories().find((c) => c.slug === slug);
    if (found) {
      this.currentCategoryTitle.set(found.name);
    } else {
      this.currentCategoryTitle.set('Danh mục hoa');
    }
  }

  loadProducts(): void {
    this.isLoading.set(true);
    const categorySlug = this.selectedCategorySlug();
    const sort = this.selectedSort();

    this.productService.getProducts({ categorySlug, sort }).subscribe({
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

  onSelectSort(sortType: string): void {
    this.selectedSort.set(sortType);
    this.loadProducts();
  }
}
