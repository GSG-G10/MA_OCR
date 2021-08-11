const express = require('express');
const compression = require('compression');
const path = require('path');
require('env2')('.env');
const { notFoundController, serverErrController } = require('./controllers');
const app = express();

const { ocrRouter } = require('./Routes');
const port = 3000;

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/ocr', ocrRouter);

app.use(notFoundController);

app.use(serverErrController);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});