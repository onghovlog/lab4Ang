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

| Phương thức | Endpoint | Mô tả |
|---|---|---|
| `GET` | `/api/health` | Kiểm tra trạng thái server |
| `GET` | `/api/products` | Lấy danh sách sản phẩm (hỗ trợ `?category=`, `?sort=`, `?search=`, `?limit=`) |
| `GET` | `/api/products/new` | Lấy danh sách sản phẩm mới nhất (`?limit=4`) |
| `GET` | `/api/products/sale` | Lấy danh sách sản phẩm đang giảm giá (`?limit=4`) |
| `GET` | `/api/products/bestseller` | Lấy danh sách sản phẩm bán chạy nhất (`?limit=4`) |
| `GET` | `/api/products/:id` | Lấy chi tiết sản phẩm theo ID (hỗ trợ số ID hoặc ObjectId) |
| `POST` | `/api/products` | Thêm mới một sản phẩm |
| `PUT` | `/api/products/:id` | Cập nhật thông tin sản phẩm |
| `DELETE` | `/api/products/:id` | Xoá sản phẩm |
| `POST` | `/api/products/seed` | Reset & nạp lại 10 sản phẩm mẫu ban đầu |

> **Ghi chú**: Khi server khởi động lần đầu, nếu database rỗng, hệ thống sẽ tự động nạp (auto-seed) 10 sản phẩm hoa tươi ban đầu vào database.

