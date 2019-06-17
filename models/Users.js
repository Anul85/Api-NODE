const crypto = require('crypto');
const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const usersSchema = new db.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
    maxLength: 90,
  },
  email: {
    type: String,
    email: true,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    country: {type: String, required: true,},
    city: {type: String, required: true,},
  },
  image: {
    type: String,
    defualt: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'editor', 'admin'],
    default: 'user',
  },
  hash: {
    type: String,
    require: true,
  },
  salt: {
    type: String,
    require: true,
  },
  iteration: {
    type: Number,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

usersSchema.virtual('password')
    .set(function(data) {
      this.salt = String(Math.random());
      this.iteration = parseInt(Math.random() * 18);
      this.hash = this.getHash(data);
    })
    .get(function() {
      return this.hash;
    });

usersSchema.methods.getHash = function(password) {
  let c = crypto.createHmac('sha1', this.salt);

  for (let i=0; i < this.iteration; i++) {
    c = c.update(password);
  }
  return c.digest('hex');
};

usersSchema.methods.checkPassword = function(data) {
  return this.getHash(data) === this.hash;
};

module.exports = mongoose.model('users', usersSchema);
