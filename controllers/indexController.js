const Category = require('../models/Category');

exports.getHomePage = async (req, res) => {
  const categoryList = await Category.find();
  res.render('index', { title: 'All Products', categoryList });
};

exports.getAddProductPage = async (req, res) => {
  const categoryList = await Category.find();
  res.render('productForm', { categoryList });
};

exports.getAddCategoryPage = async (req, res) => {
  const categoryList = await Category.find();
  res.render('categoryForm', { categoryList });
};

exports.addCategory = async (req, res) => {
  const { name, description } = req.body;
  const newCategory = await Category.create({ name, description });
  res.redirect(newCategory.url);
};
