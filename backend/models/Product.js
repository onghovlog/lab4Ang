const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
      default: '-',
    },
    image: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    badge: {
      type: String,
      default: '',
    },
    badgeClass: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'all',
    },
    description: {
      type: String,
      default: '',
    },
    features: {
      type: [String],
      default: [
        '🌸 Hoa tươi chọn lọc 100% trong ngày',
        '💌 Tặng kèm thiệp chúc mừng & banner',
        '🚚 Giao nhanh trong 60 phút nội thành',
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
