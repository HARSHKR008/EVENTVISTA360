const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  event: {
    type: String,
    required: [true, 'Please select an event'],
  },
  rating: {
    type: Number,
    required: [true, 'Please provide a rating'],
    min: 1,
    max: 5
  },
  liked: {
    type: String,
    required: [true, 'Please tell us what you enjoyed'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.models.Feedback || mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;