const express = require('express');
const router = express.Router();
const MoviesController = require('../../controllers/movies');

router
  .route('/')
  .get(MoviesController.getMovies)
  .post(MoviesController.addMovie);

module.exports = router;
