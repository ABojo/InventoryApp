const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:id/edit', productController.getEditPage);

module.exports = router;
