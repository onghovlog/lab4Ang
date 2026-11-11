const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Specialized routes (must be before :id)
router.get('/new', productController.getNewProducts);
router.get('/sale', productController.getSaleProducts);
router.get('/bestseller', productController.getBestSellingProducts);
router.post('/seed', productController.seedProducts);

// Standard CRUD
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
