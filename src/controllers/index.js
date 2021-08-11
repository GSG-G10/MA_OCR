const ocrFileController = require('./ocr').ocrFileController;
const ocrUrlController = require('./ocr').ocrUrlController;
const notFoundController = require('./err');
module.exports = { ocrFileController, ocrUrlController, notFoundController };