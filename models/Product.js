const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  stock: Number,
  url: String,
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
