import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/products`;

  getProducts(params?: {
    categorySlug?: string;
    categoryId?: number;
    sort?: string;
    search?: string;
    limit?: number;
  }): Observable<Product[]> {
    let httpParams = new HttpParams();

    if (params?.categorySlug) {
      httpParams = httpParams.set('categorySlug', params.categorySlug);
    }
    if (params?.categoryId) {
      httpParams = httpParams.set('categoryId', params.categoryId.toString());
    }
    if (params?.sort) {
      httpParams = httpParams.set('sort', params.sort);
    }
    if (params?.search) {
      httpParams = httpParams.set('search', params.search);
    }
    if (params?.limit) {
      httpParams = httpParams.set('limit', params.limit.toString());
    }

    return this.http.get<Product[]>(this.apiUrl, { params: httpParams });
  }

  getNewProducts(limit: number = 4): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/new?limit=${limit}`);
  }

  getSaleProducts(limit: number = 4): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/sale?limit=${limit}`);
  }

  getBestSellingProducts(limit: number = 4): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/bestseller?limit=${limit}`);
  }

  // Hỗ trợ tìm kiếm theo ID hoặc Slug
  getProductById(idOrSlug: number | string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${idOrSlug}`);
  }
}
