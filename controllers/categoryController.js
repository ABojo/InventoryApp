const Category = require('../models/Category');
const Product = require('../models/Product');

exports.getCategoryPage = async (req, res) => {
  const categoryList = await Category.find();

  const category = categoryList.find((el) => el.name === req.params.name);
  const products = await Product.find({ category: category._id });

  res.render('category', { categoryList, category, products });
};
