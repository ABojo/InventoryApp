const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:name', categoryController.getCategoryPage);
router.get('/:name/edit', categoryController.getEditCategoryPage);

module.exports = router;
