const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    tableId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        required: true
    },
    reservationTime: {
        type: Date,
        required: true
    }, // ISO string (1 hour reservation)
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);
