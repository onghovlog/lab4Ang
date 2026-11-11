# BHShop Backend API

Backend API xây dựng bằng **Node.js**, **Express** và **MongoDB (Mongoose)** cho dự án BHShop Angular.

## Kết nối MongoDB
Chuỗi kết nối MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://thayhoweb_db_user:Tuong29042011@cluster0.uafqmya.mongodb.net/bhshop?retryWrites=true&w=majority
PORT=5000
```

## Cài đặt & Khởi chạy

### 1. Cài đặt thư viện:
```bash
cd backend
npm install
```

### 2. Khởi chạy server:
```bash
npm start
# hoặc chế độ dev (tự reload):
npm run dev
```

Từ thư mục gốc của dự án:
```bash
npm run backend
```

## Danh sách API Endpoints

### 1. Categories API (`/api/categories`)
| Phương thức | Endpoint | Mô tả |
|---|---|---|
| `GET` | `/api/categories` | Lấy danh sách danh mục (đã sắp xếp tăng dần theo trường `order`) |
| `GET` | `/api/categories/:slugOrId` | Lấy chi tiết danh mục theo `slug` hoặc `id` |
| `POST` | `/api/categories` | Thêm mới danh mục |
| `PUT` | `/api/categories/:id` | Cập nhật danh mục |
| `DELETE` | `/api/categories/:id` | Xoá danh mục |
| `POST` | `/api/categories/seed` | Reset & nạp lại 7 danh mục mẫu ban đầu |

### 2. Products API (`/api/products`)
| Phương thức | Endpoint | Mô tả |
|---|---|---|
| `GET` | `/api/health` | Kiểm tra trạng thái server |
| `GET` | `/api/products` | Lấy danh sách sản phẩm (hỗ trợ `?categorySlug=`, `?categoryId=`, `?sort=`, `?search=`, `?limit=`) |
| `GET` | `/api/products/new` | Lấy danh sách sản phẩm mới nhất (`?limit=4`) |
| `GET` | `/api/products/sale` | Lấy danh sách sản phẩm đang giảm giá (`?limit=4`) |
| `GET` | `/api/products/bestseller` | Lấy danh sách sản phẩm bán chạy nhất (`?limit=4`) |
| `GET` | `/api/products/:idOrSlug` | Lấy chi tiết sản phẩm theo `id` hoặc `slug` |
| `POST` | `/api/products` | Thêm mới một sản phẩm |
| `PUT` | `/api/products/:id` | Cập nhật thông tin sản phẩm |
| `DELETE` | `/api/products/:id` | Xoá sản phẩm |
| `POST` | `/api/products/seed` | Reset & nạp lại 10 sản phẩm mẫu ban đầu |
