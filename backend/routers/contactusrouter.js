const express = require('express');
const router = express.Router();
const ContactSubmission = require('../models/contactusmodel');
// const { protectRoute, isAdmin } = require('../');

// Create a new contact submission
router.post('/add', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        const newSubmission = await ContactSubmission.create({
            name,
            email,
            message,
            status: 'new',
            date: new Date()
        });

        res.status(201).json({
            success: true,
            data: newSubmission
        });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Error submitting contact form'
        });
    }
});

// Get all contact submissions (admin only)
router.get('/getall', async (req, res) => {
    try {
        const submissions = await ContactSubmission.find()
            .sort({ date: -1 }); // Sort by date descending

        res.status(200).json({
            success: true,
            count: submissions.length,
            data: submissions
        });
    } catch (error) {
        console.error('Error fetching submissions:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contact submissions'
        });
    }
});

// Update submission status (admin only)
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ['new', 'in-progress', 'resolved'];

        if (!validStatuses.includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value'
            });
        }

        const submission = await ContactSubmission.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true, runValidators: true }
        );

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: 'Submission not found'
            });
        }

        res.status(200).json({
            success: true,
            data: submission
        });
    } catch (error) {
        console.error('Error updating submission:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating submission status'
        });
    }
});

// Delete a submission (admin only)
router.delete('/:id', async (req, res) => {
    try {
        const submission = await ContactSubmission.findByIdAndDelete(req.params.id);

        if (!submission) {
            return res.status(404).json({
                success: false,
                message: 'Submission not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Submission deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting submission:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting submission'
        });
    }
});

module.exports = router;