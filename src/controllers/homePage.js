const path = require('path');
const fs = require('fs');

const homePageController = (req, res) => {
    const filePath = path.join(__dirname, '../..', 'public', 'index.html');
    res.status(200).sendFile(filePath);
};


module.exports = homePageController;