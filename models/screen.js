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
                    seats: [
                        {
                            seatNumber: Number,
                            status: {
                                type: String,
                                enum: ['available', 'booked'],
                                default: 'available'
                            }
                        }
                    ]
                }
            ]
        }
    ]
  });

  const Screen = mongoose.model('Screen', screenSchema);
  module.exports = Screen