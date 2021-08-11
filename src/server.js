const express = require('express');
const compression = require('compression');
require('env2')('.env');
const { notFoundController } = require('./controllers');
const app = express();

const { homepageRouter, ocrRouter } = require('./Routes');
const port = 3000;

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/ocr', ocrRouter);

app.use(notFoundController);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});