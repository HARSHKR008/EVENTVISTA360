import express from 'express';
import Feedback from '../models/feedbackmodel.js';

export const isAuthenticated = (req, res, next) => {
  // Add your authentication logic here
  // Example: Check for valid JWT token
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Please login first'
    });
  }
  next();
};

const router = express.Router();

// Create new feedback
router.post('/submit-feedback', async (req, res) => {
  try {
    const { event, rating, liked } = req.body;

    if (!event || !rating || !liked) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    const feedback = await Feedback.create({
      event,
      rating,
      liked
    });

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      feedback
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get all feedbacks (Admin only)
router.get('/all-feedbacks', isAuthenticated, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      feedbacks
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Get feedback statistics (Admin only)
router.get('/statistics', isAuthenticated, async (req, res) => {
  try {
    const totalFeedbacks = await Feedback.countDocuments();
    const averageRating = await Feedback.aggregate([
      {
        $group: {
          _id: null,
          avgRating: { $avg: '$rating' }
        }
      }
    ]);

    const ratingDistribution = await Feedback.aggregate([
      {
        $group: {
          _id: '$rating',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: -1 } }
    ]);

    const eventWiseRating = await Feedback.aggregate([
      {
        $group: {
          _id: '$event',
          avgRating: { $avg: '$rating' },
          count: { $sum: 1 }
        }
      },
      { $sort: { avgRating: -1 } }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalFeedbacks,
        averageRating: averageRating[0]?.avgRating || 0,
        ratingDistribution,
        eventWiseRating
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// Delete feedback (Admin only)
router.delete('/delete/:id', isAuthenticated, async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: 'Feedback not found'
      });
    }

    await feedback.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Feedback deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

export default router;

// In your main app.js or server.js
import feedbackRouter from './routers/feedbackrouter.js';
app.use('/api/feedback', feedbackRouter);