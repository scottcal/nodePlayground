const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ' A tour must have a name'],
    unique: true,
    trim: true
  },

  duration: {
    type: Number,
    required: [true, ' A tour must have a duration']
  },
  maxGroupSize: {
    type: Number,
    required: [true, ' A tour must have a size']
  },
  difficulty: {
    type: String,
    required: [true, ' A tour must have a difficulty']
  },
  rating: {
    type: Number,
    default: 4.5
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'a tour must have a price']
  },
  discount: Number,
  summary: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'a tour must have a description']
  },
  imageCover: {
    type: String,
    required: [true, 'a tour must have a image']
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
