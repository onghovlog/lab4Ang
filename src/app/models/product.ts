export interface Product {
  _id?: string;
  id: number;
  slug: string;
  name: string;
  price: string;
  oldPrice: string;
  image: string;

  discount: number; // Phần trăm giảm giá
  sold: number;     // Số lượt bán
  createdAt: string; // Ngày nhập sản phẩm

  badge?: string;
  badgeClass?: string;
  categoryId: number; // Thay đổi category thành categoryId
  description?: string;
  features?: string[];
}
