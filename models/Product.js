const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must specify a name!'],
    unique: [true, 'Sorry, the name you entered is already taken!'],
  },
  description: {
    type: String,
    required: [true, 'You must specify a description!'],
  },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  price: { type: Number, required: [true, 'You must specify a price!'] },
  stock: { type: Number, required: [true, 'You must specify a stock!'] },
});

productSchema.virtual('url').get(function () {
  return `/product/${this._id}`;
});

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;
