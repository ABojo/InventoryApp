const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:id/edit', productController.getEditPage);
router.post('/:id/edit', productController.editProduct);
router.get('/:id/delete', productController.deleteProduct);

module.exports = router;
