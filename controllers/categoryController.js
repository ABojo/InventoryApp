const Category = require('../models/Category');

exports.getCategoryPage = async (req, res) => {
  const categoryList = await Category.find();
  const category = categoryList.find((el) => el.name === req.params.name);

  res.render('category', { categoryList, category });
};
