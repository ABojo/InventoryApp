const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:name', categoryController.getCategoryPage);

module.exports = router;
