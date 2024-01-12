const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    email: {
        type: String,
        required: false,
        unique: false,
    },
    donationList: {
        type: String, 
        required: false,
        unique: false,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: false,
    },
    address: {
        type: String,
        required: true,
        unique: false,
    },
    contactDate: {
        type: Date,
        default: Date.now,
    },
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
