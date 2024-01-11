const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const Contact = require('../Models/ContactSchema');

const Donation =require('../Models/DonationSchema')

router.use(bodyParser.json());

router.post('/donate', async (req, res) => {
    try {
        const donationData = req.body;
        const result = await Donation.create(donationData);
        res.status(201).json({ message: "Data Uploaded Successfully", data: result });
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message || error });
    }
});

module.exports = router;
