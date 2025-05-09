const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    }, // e.g., 'Italian', 'Indian'
    location: {
        type: String,
        required: true
    }, // e.g., 'Mumbai'
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
