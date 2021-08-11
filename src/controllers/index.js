const ocrFileController = require('./ocr').ocrFileController;
const ocrUrlController = require('./ocr').ocrUrlController;
const languagesController = require('./languages');
const { notFoundController, serverErrController } = require('./err');
module.exports = { ocrFileController, ocrUrlController, notFoundController, serverErrController, languagesController };