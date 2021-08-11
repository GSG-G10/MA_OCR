const fs = require('fs');
const path = require('path');

const languagesController = (req, res) => {
    res.status(200).type('json').sendFile(path.join(__dirname, '..', 'language.json'));
};

module.exports = languagesController;