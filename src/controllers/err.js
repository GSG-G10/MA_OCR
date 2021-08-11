const path = require('path');
const notFoundController = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', 'err', '404.html'));
};

module.exports = notFoundController;