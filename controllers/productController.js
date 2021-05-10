const Product = require('..//models/Product');
const Category = require('../models/Category');

exports.getEditPage = async (req, res) => {
  const categoryList = await Category.find();
  const product = await Product.findById(req.params.id);

  res.render('editProductForm', { product, categoryList });
};

exports.editProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;

  const product = await Product.findById(req.params.id);
  const category = await Category.findById(product.category);

  await product.update({
    name: name,
    description: description,
    price: price,
    stock: stock,
  });

  res.redirect(category.url);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  const category = await Category.findById(product.category);
  product.remove();

  res.redirect(category.url);
};
