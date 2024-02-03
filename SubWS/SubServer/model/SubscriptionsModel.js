const mongoose = require('mongoose');

const SubscriptionsSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  memberId: mongoose.ObjectId,
  movies: [{ movieId: mongoose.ObjectId, date: Date }],
});

const Subscriptions = mongoose.model('Subscriptions', SubscriptionsSchema);

module.exports = Subscriptions;

