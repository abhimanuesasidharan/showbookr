const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
    person: {
    type: mongoose.ObjectId,
    ref: 'Person'
    },
    movie: {
        type: mongoose.ObjectId,
        ref: 'Movie'
    },
    role: String
  });

  const Cast = mongoose.model('Cast', castSchema);
  module.exports = Cast