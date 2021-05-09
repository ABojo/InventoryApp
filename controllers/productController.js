const Product = require('..//models/Product');
const Category = require('../models/Category');

exports.getEditPage = async (req, res) => {
  const categoryList = await Category.find();
  const product = await Product.findById(req.params.id);

  res.render('editProductForm', { product, categoryList });
};
