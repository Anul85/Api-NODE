
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/book_api')
  .catch(console.error);

module.exports = mongoose;
