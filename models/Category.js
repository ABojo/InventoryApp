const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must specify a name!'],
    unique: [true, 'Sorry, that name is already taken!'],
  },
  nameLower: {
    type: String,
    required: [true, 'You must specify a nameLower!'],
    unique: [true, 'Sorry, that nameLower is already taken!'],
  },
  description: { type: String, required: true },
});

categorySchema.virtual('url').get(function () {
  return `/category/${this.nameLower}`;
});

const categoryModel = mongoose.model('Category', categorySchema);
module.exports = categoryModel;
