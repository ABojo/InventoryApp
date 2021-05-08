const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.getHomePage);
router.get('/add-product', indexController.getAddProductPage);
router.get('/add-category', indexController.getAddCategoryPage);
router.post('/add-category', indexController.addCategory);

module.exports = router;
