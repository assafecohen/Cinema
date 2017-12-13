const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  id: Number,
  title: String,
  imageUrl: String,
  movieId: String
});

const movies = mongoose.model('movies', MoviesSchema);

module.exports = movies;
