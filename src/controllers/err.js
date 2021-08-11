const path = require('path');
const notFoundController = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'err', '404.html'));
};

const serverErrController = (err, req, res, next) => {
    res.status(500).sendFile(path.join(__dirname, '..', 'public', 'err', '500.html'));
};

module.exports = { notFoundController, serverErrController };