const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});

categorySchema.virtual('url').get(function () {
  return `/category/${this.name}`.toLowerCase();
});

categorySchema.virtual('nameLower').get(function () {
  return this.name.toLowerCase();
});

const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;
