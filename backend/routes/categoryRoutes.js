const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Specialized routes
router.post('/seed', categoryController.seedCategories);

// Standard CRUD
router.get('/', categoryController.getCategories);
router.get('/:slugOrId', categoryController.getCategoryBySlugOrId);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
