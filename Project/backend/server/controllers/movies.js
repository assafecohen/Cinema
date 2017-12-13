const Movies = require('../models/movies');

module.exports = {
  getMovies: async (req, res) => {
    try {
      const movies = await Movies.find();
      res.status(200).json(movies);
    } catch (error) {
      res.send(error);
    }
  },

  addMovie: async (req, res) => {
    const newMovies = new Movies(req.body);
    try {
      const movies = await newMovies.save();
      res.status(200).json({ movies, message: 'Created successfully' });
    } catch (error) {
      res.send(error);
    }
  }
};
