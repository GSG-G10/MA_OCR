const ocrFileController = require('./ocr').ocrFileController;
const ocrUrlController = require('./ocr').ocrUrlController;
const { notFoundController, serverErrController } = require('./err');
module.exports = { ocrFileController, ocrUrlController, notFoundController, serverErrController };