const fs = require('fs');
const path = require('path');
const notFoundController = (req, res) => {
    res.status(400).send(path.join(__dirname, '../..', 'public', 'err', '404.html'));
};

module.exports = notFoundController;