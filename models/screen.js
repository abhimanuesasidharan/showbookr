const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
    screenNumber: Number,
    theatre: {
        type: mongoose.ObjectId,
        ref: 'Theatre'
    },
    tiers: [
        {
            name: String,
            price: Number,
            rows: [
                {
                    name: String,
                    numberOfSeats: Number
                }
            ]
        }
    ]
  });

  const Screen = mongoose.model('Screen', screenSchema);
  module.exports = Screen