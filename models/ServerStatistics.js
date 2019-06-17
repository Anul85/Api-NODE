const mongoose = require('mongoose');
const db = require('../lib/db_coonect');

const sereverStatSchema = new db.Schema({
  dbn: {
    type: Array,
  },
  ram: {
    type: Array,
  },
  network: {
    type: Array,
  },
  hard_drive: {
    type: Array,
  },
});

module.exports = mongoose.model('server_statistics', sereverStatSchema);
