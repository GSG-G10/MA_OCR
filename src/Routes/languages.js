const express = require('express');
const { languagesController } = require('../controllers');
const router = express.Router();

router.get('/', languagesController);

module.exports = router;