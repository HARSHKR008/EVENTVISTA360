const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters long'],
        maxLength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        trim: true,
        lowercase: true,
        match: [
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            'Please provide a valid email address'
        ]
    },
    message: {
        type: String,
        required: [true, 'Please provide your message'],
        trim: true,
        minLength: [10, 'Message must be at least 10 characters long'],
        maxLength: [1000, 'Message cannot exceed 1000 characters']
    },
    status: {
        type: String,
        enum: ['new', 'in-progress', 'resolved'],
        default: 'new'
    },
    date: {
        type: Date,
        default: Date.now
    },
    adminNotes: {
        type: String,
        trim: true,
        maxLength: [500, 'Admin notes cannot exceed 500 characters']
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Middleware to update lastUpdated timestamp before save
contactSubmissionSchema.pre('save', function(next) {
    this.lastUpdated = Date.now();
    next();
});

// Virtual for formatted date
contactSubmissionSchema.virtual('formattedDate').get(function() {
    return this.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
});

// Method to check if submission is older than X days
contactSubmissionSchema.methods.isOlderThan = function(days) {
    const timeDiff = Date.now() - this.date.getTime();
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return daysDiff > days;
};

// Static method to get submissions by status
contactSubmissionSchema.statics.findByStatus = function(status) {
    return this.find({ status: status }).sort({ date: -1 });
};

const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);

module.exports = ContactSubmission;