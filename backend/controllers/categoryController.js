const Category = require('../models/Category');
const initialCategories = require('../data/initialCategories');

// @desc    Get all categories sorted by order
// @route   GET /api/categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy danh sách danh mục', error: error.message });
  }
};

// @desc    Get category by slug or id
// @route   GET /api/categories/:slugOrId
exports.getCategoryBySlugOrId = async (req, res) => {
  try {
    const { slugOrId } = req.params;
    let category;

    if (!isNaN(slugOrId)) {
      category = await Category.findOne({ id: Number(slugOrId) });
    } else {
      category = await Category.findOne({ slug: slugOrId });
      if (!category && slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
        category = await Category.findById(slugOrId);
      }
    }

    if (!category) {
      return res.status(404).json({ message: 'Không tìm thấy danh mục' });
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server khi lấy thông tin danh mục', error: error.message });
  }
};

// @desc    Create new category
// @route   POST /api/categories
exports.createCategory = async (req, res) => {
  try {
    if (!req.body.id) {
      const maxCategory = await Category.findOne().sort({ id: -1 });
      req.body.id = maxCategory ? maxCategory.id + 1 : 1;
    }
    if (req.body.order === undefined) {
      req.body.order = req.body.id;
    }

    const category = new Category(req.body);
    const saved = await category.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi tạo danh mục', error: error.message });
  }
};

// @desc    Update category
// @route   PUT /api/categories/:id
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const query = !isNaN(id) ? { id: Number(id) } : { slug: id };
    const updated = await Category.findOneAndUpdate(query, req.body, { new: true });

    if (!updated) {
      return res.status(404).json({ message: 'Không tìm thấy danh mục để cập nhật' });
    }

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi cập nhật danh mục', error: error.message });
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const query = !isNaN(id) ? { id: Number(id) } : { _id: id };
    const deleted = await Category.findOneAndDelete(query);

    if (!deleted) {
      return res.status(404).json({ message: 'Không tìm thấy danh mục để xoá' });
    }

    res.json({ message: 'Đã xoá danh mục thành công', deleted });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi xoá danh mục', error: error.message });
  }
};

// @desc    Seed initial categories
// @route   POST /api/categories/seed
exports.seedCategories = async (req, res) => {
  try {
    await Category.deleteMany({});
    const inserted = await Category.insertMany(initialCategories);
    res.json({ message: 'Đã khởi tạo danh mục mẫu thành công', count: inserted.length });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi seed danh mục', error: error.message });
  }
};
