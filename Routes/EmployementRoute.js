const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Career = require('../Models/EmployementSchema');

router.use(bodyParser.json());

router.post('/career', async (req, res) => {
    try {
        const careerData = req.body;
        const result = await Career.create(careerData);
        res.status(201).json({ message: "Data Uploaded Successfully", data: result });
    } catch (error) {
        console.error("Error uploading Carrer Datat:", error);
        res.status(500).json({ error: "Internal Server Error", details: error.message || error });
    }
});

module.exports = router;
