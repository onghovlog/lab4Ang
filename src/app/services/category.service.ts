import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/categories';

  // Lấy toàn bộ danh mục sắp xếp theo order
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // Lấy chi tiết danh mục theo slug hoặc id
  getCategoryBySlugOrId(slugOrId: string | number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${slugOrId}`);
  }
}

