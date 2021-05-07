var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const categoryList = ['Games', 'Computers', 'Clothes', 'Phones', 'Food'];

  res.render('index', { title: 'All Products', categoryList: categoryList });
});

module.exports = router;
