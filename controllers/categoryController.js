const Category = require('../models/Category');
const Product = require('../models/Product');

exports.getCategoryPage = async (req, res) => {
  const categoryList = await Category.find();

  const category = categoryList.find((el) => el.nameLower === req.params.name);
  const products = await Product.find({ category: category._id });

  res.render('category', { categoryList, category, products });
};

exports.getAddProductPage = async (req, res) => {
  const categoryList = await Category.find();
  const category = categoryList.find((el) => el.nameLower === req.params.name);

  res.render('productForm', { categoryList, category });
};

exports.getEditCategoryPage = async (req, res) => {
  const categoryList = await Category.find();
  const category = categoryList.find((el) => el.nameLower === req.params.name);

  res.render('editCategoryForm', { categoryList, category });
};

exports.addProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  const category = await Category.findOne({ nameLower: req.params.name });
  await Product.create({
    name,
    description,
    price,
    stock,
    category: category._id,
  });

  res.redirect(category.url);
};

exports.editCategory = async (req, res) => {
  const { name, description } = req.body;
  console.log(req.params.name);
  const updatedCategory = await Category.findOneAndUpdate(
    { nameLower: req.params.name },
    { name, nameLower: name.toLowerCase(), description },
    { new: true, useFindAndModify: false }
  );
  res.redirect(updatedCategory.url);
};

exports.deleteCategory = async (req, res) => {
  const category = await Category.findOne({ nameLower: req.params.name });
  const products = await Product.find({ category: category._id });
  const promises = products.map((product) => product.remove());
  await Promise.all([promises, category.remove()]);

  res.redirect('/');
};
