const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: Number,
  stock: Number,
  url: String,
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
