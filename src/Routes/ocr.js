const express = require('express');
const multer = require('multer');
const router = express.Router();
const { ocrFileController, ocrUrlController } = require('../controllers');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, originalname);
    }
});

const upload = multer({ storage });


router.post('/url', ocrUrlController);

router.post('/file', upload.single('file'), ocrFileController);









module.exports = router;