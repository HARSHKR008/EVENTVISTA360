const { Schema, model } = require('../connection');

const modelSchema = new Schema({
    modelname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images360: [{
        type: String,
        required: true,
    }]
});

const venueSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    imgurl: [{
        type: String,
        required: true,
    }],
    category: {
        type: String,
        required: true,
    },    images360: [{
        type: String,
    }],
    model360: [{
        name: String,
        description: String,
        images360: [String]
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = model('venue', venueSchema);
