const Product = require('..//models/Product');
const Category = require('../models/Category');

exports.getEditPage = async (req, res) => {
  const categoryList = await Category.find();
  const product = await Product.findById(req.params.id);

  res.render('editProductForm', { product, categoryList });
};

exports.editProduct = async (req, res) => {
  const { name, description, price } = req.body;

  const product = Product.findById(req.params.id);
  await product.update({ name: name, description: description, price: price });

  res.redirect('/');
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
