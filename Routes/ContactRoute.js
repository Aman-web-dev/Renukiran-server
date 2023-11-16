const express = require('express');
const router = express.Router();
const Contact = require('../Models/ContactSchema')

router.post('/contact', async (req, res) => {
    try {

        const contactData = req.body;
        const result = await Contact.create(contactData);

        res.status(201).json({ message: "Data Uploaded Successfully", data: result })
    } catch (error) {


        console.error(error);
        res.status(500).json({ error: "Data Couldn't Be Uploaded issue Caused In Server" })
    }
})

module.exports = router;