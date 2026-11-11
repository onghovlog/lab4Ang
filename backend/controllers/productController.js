const Product = require('../models/Product');
const initialProducts = require('../data/initialProducts');

// @desc    Get all products (with optional filtering, sorting, limit)
// @route   GET /api/products
exports.getProducts = async (req, res) => {
  try {
    const { category, sort, search, limit } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.category = category;
    }

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    let productsQuery = Product.find(query);

    // Sorting
    if (sort === 'bestseller') {
      productsQuery = productsQuery.sort({ sold: -1 });
    } else if (sort === 'promotion') {
      productsQuery = productsQuery.where('discount').gt(0).sort({ discount: -1 });
    } else if (sort === 'price-asc') {
      productsQuery = productsQuery.sort({ price: 1 });
    } else if (sort === 'price-desc') {
      productsQuery = productsQuery.sort({ price: -1 });
    } else {
      // Default: newest first (by id descending or createdAt descending)
      productsQuery = productsQuery.sort({ id: -1 });
    }

    if (limit) {
      productsQuery = productsQuery.limit(parseInt(limit, 10));
    }

    const products = await productsQuery.exec();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy danh sách sản phẩm', error: error.message });
  }
};

// @desc    Get newest products
// @route   GET /api/products/new
exports.getNewProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 4;
    const products = await Product.find().sort({ id: -1 }).limit(limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy sản phẩm mới', error: error.message });
  }
};

// @desc    Get sale products
// @route   GET /api/products/sale
exports.getSaleProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 4;
    const products = await Product.find({ discount: { $gt: 0 } })
      .sort({ discount: -1 })
      .limit(limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy sản phẩm khuyến mãi', error: error.message });
  }
};

// @desc    Get bestseller products
// @route   GET /api/products/bestseller
exports.getBestSellingProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 4;
    const products = await Product.find().sort({ sold: -1 }).limit(limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy sản phẩm bán chạy', error: error.message });
  }
};

// @desc    Get single product by ID (numeric id or Mongo _id)
// @route   GET /api/products/:id
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    let product;

    // Check if id is a number
    if (!isNaN(id)) {
      product = await Product.findOne({ id: Number(id) });
    } else {
      product = await Product.findById(id);
    }

    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy chi tiết sản phẩm', error: error.message });
  }
};

// @desc    Create new product
// @route   POST /api/products
exports.createProduct = async (req, res) => {
  try {
    // If id is not provided, generate next max id
    if (!req.body.id) {
      const maxProduct = await Product.findOne().sort({ id: -1 });
      req.body.id = maxProduct ? maxProduct.id + 1 : 1;
    }

    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi tạo sản phẩm', error: error.message });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const query = !isNaN(id) ? { id: Number(id) } : { _id: id };
    const updated = await Product.findOneAndUpdate(query, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm để cập nhật' });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi cập nhật sản phẩm', error: error.message });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const query = !isNaN(id) ? { id: Number(id) } : { _id: id };
    const deleted = await Product.findOneAndDelete(query);

    if (!deleted) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm để xoá' });
    }

    res.json({ message: 'Đã xoá sản phẩm thành công', deleted });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi xoá sản phẩm', error: error.message });
  }
};

// @desc    Seed initial data
// @route   POST /api/products/seed
exports.seedProducts = async (req, res) => {
  try {
    await Product.deleteMany({});
    const inserted = await Product.insertMany(initialProducts);
    res.json({ message: 'Đã khởi tạo dữ liệu mẫu thành công', count: inserted.length });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi seed dữ liệu', error: error.message });
  }
};

