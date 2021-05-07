const Category = require('../models/Category');

exports.getHomePage = async (req, res, next) => {
  const categories = await Category.find();
  res.render('index', { title: 'All Products', categoryList: categories });
};
