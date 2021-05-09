const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:name', categoryController.getCategoryPage);
router.get('/:name/edit', categoryController.getEditCategoryPage);
router.post('/:name/edit', categoryController.editCategory);
router.get('/:name/delete', categoryController.deleteCategory);

module.exports = router;
