const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: String,
  nameLower: String,
  description: String,
});

categorySchema.virtual('url').get(function () {
  return `/category/${this.nameLower}`;
});

const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;
