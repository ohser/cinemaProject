const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  userName: { type: String, required: true },
  password: { type: String, required: false },
//   permissions: [{ type: String }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
