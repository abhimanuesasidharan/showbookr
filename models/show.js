const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    screen: {
        type: mongoose.ObjectId,
        ref: "Screen"
    },
    showTime: Date,
    movie: {
        type: mongoose.ObjectId,
        ref: "Movie"
    }
  });

  const Show = mongoose.model('Show', showSchema);
  module.exports = Show