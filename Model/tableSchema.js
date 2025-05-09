const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    tableNumber: {
        type: String,
        required: true
    }, // e.g., 'T1', 'A2'
    capacity: {
        type: Number,
        required: true
    }, // e.g., 4
}, { timestamps: true });

module.exports = mongoose.model('Table', tableSchema);
