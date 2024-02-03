const mongoose = require('mongoose');

const MembersSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  name: String,
  Email: String,
  City: String,
});

const Members = mongoose.model('Members', MembersSchema);

module.exports = Members;

