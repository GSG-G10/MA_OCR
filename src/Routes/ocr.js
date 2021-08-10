const express = require('express');
const router = express.Router();
const { homepageController, } = require('../controllers');


router.get('/ocr', (req, res) => {
    res.send("hi ocr");
});










module.exports = router;