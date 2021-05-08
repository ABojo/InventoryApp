const Category = require('../models/Category');
const Product = require('../models/Product');

exports.getHomePage = async (req, res) => {
  const categoryList = await Category.find();
  res.render('index', { title: 'All Products', categoryList });
};

exports.getAddProductPage = async (req, res) => {
  const categoryList = await Category.find();
  res.render('productForm', { categoryList });
};

exports.addProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  const selectedCategory = await Category.findById(category);

  const newProduct = await Product.create({
    name,
    description,
    price,
    category,
  });

  res.redirect(selectedCategory.url);
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
