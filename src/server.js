const express = require('express');
const compression = require('compression');
const path = require('path');
require('env2')('.env');
const { notFoundController, serverErrController } = require('./controllers');
const app = express();

const { ocrRouter, languagesRouter } = require('./Routes');
const port = process.env.port || 3000;

app.use(compression());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/ocr', ocrRouter);

app.use('/languages', languagesRouter);

app.use(notFoundController);

app.use(serverErrController);

app.listen(port);