const mongoose = require('mongoose');

const SubscriptionsSchema = new mongoose.Schema({
  _id: mongoose.ObjectId,
  MemberId: String,
  Movies: [
    { 
      movieId: Number,
       date: String 
      }
    ],

});

const Subscriptions = mongoose.model('Subscriptions', SubscriptionsSchema);

module.exports = Subscriptions;

