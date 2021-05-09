const Category = require('../models/Category');
const Product = require('../models/Product');

exports.getCategoryPage = async (req, res) => {
  const categoryList = await Category.find();

  const category = categoryList.find((el) => el.name === req.params.name);
  const products = await Product.find({ category: category._id });

  res.render('category', { categoryList, category, products });
};

exports.getEditCategoryPage = async (req, res) => {
  const categoryList = await Category.find();
  const category = categoryList.find((el) => el.name === req.params.name);

  res.render('editCategoryForm', { categoryList, category });
};

exports.editCategory = async (req, res) => {
  const { name, description } = req.body;
  const updatedCategory = await Category.findOneAndUpdate(
    { name: req.params.name },
    { name, description },
    { new: true, useFindAndModify: false }
  );
  res.redirect(updatedCategory.url);
};

exports.deleteCategory = async (req, res) => {
  await Category.findOneAndRemove({ name: req.params.name });
  res.redirect('/');
};
