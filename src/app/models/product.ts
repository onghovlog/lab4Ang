export interface Product {
  _id?: string;
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  image: string;

  discount: number; // Phần trăm giảm giá
  sold: number;     // Số lượt bán
  createdAt: string; // Ngày nhập sản phẩm

  badge?: string;
  badgeClass?: string;
  category?: string;
  description?: string;
  features?: string[];
}
