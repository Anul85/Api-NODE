const mongoose = require('mongoose');
const db = require('../lib/db_coonect');
const messages = require('../messages');

const bookSchema = new db.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  authors: {
    type: Array,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
  },
  pages: {
    type: Number,
    require: true,
  },
  language: {
    type: Array,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  sale: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
  },
  date_add: {
    type: Date,
    default: new Date(),
  },
  date_create: {
    type: Date,
    required: messages('required'),
  },
});

module.exports = mongoose.model('books', bookSchema);
