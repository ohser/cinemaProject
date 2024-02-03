const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
//   permissions: [{ type: String }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
