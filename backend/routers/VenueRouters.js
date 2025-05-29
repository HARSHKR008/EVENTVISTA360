const express = require('express');
const router = express.Router();
const Model = require('../models/VenueModel');

router.post('/add', (req, res) => {
    console.log('Received venue data:', req.body);
    new Model(req.body).save()
        .then((result) => {
            console.log('Venue saved successfully:', result);
            res.status(200).json(result);
        }).catch((err) => {
            console.error('Error saving venue:', err);
            // Send back more detailed error information
            res.status(500).json({
                message: err.message,
                errors: err.errors,
                code: err.code
            });
        });
});

router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);

        });
});

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(404).json({ message: 'Venue not found' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;
