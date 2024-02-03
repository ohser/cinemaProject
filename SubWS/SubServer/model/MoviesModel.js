const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    name: String,
    genres: [String],
    image: String,
    premiered: Date,

});

const Movies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;

