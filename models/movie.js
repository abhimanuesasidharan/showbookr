const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    language: String,
    image: String,
  });

  const Movie = mongoose.model('Movie', movieSchema);
  module.exports = Movie