const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const categorySchema = new db.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    default: 'defaul-category.jpg',
  },
  views: {
    users: {type: Array},
    count: {type: Number, default: 0},
  },
  position: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('categories', categorySchema);
