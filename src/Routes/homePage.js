const express = require('express');
const router = express.Router();
const { homePageController } = require('../controllers');


router.get('/', homePageController);

module.exports = router;