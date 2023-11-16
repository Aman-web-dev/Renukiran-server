const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Contact = require('../Models/ContactSchema');

router.use(bodyParser.json());

router.post('/contact', async (req, res) => {
    try {
        const contactData = req.body;
        const result = await Contact.create(contactData);
        res.status(201).json({ message: "Data Uploaded Successfully", data: result });
    } catch (error) {
        console.error("Error creating contact:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message || error });
    }
});

module.exports = router;
