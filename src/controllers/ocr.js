const fs = require('fs');
const path = require('path');
const ocrSpaceApiWrapper = require('ocr-space-api-wrapper');
const { url } = require('inspector');

const ocrFileController = (req, res) => {
    const language = req.body.lang;
    console.log(req.body);
    const dirPath = path.join(__dirname, '../..', 'uploads');
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            res.status(500).send();
        } else {
            fs.readFile(path.join(dirPath, files[0]), (err, data) => {
                if (err) {
                    res.status(500).send();
                } else {
                    const buffer = new Buffer(data).toString('base64');
                    ocrSpaceApiWrapper(`data:image/png;base64,${buffer}`, { apiKey: process.env.API_KEY, language: language })
                        .then(data => res.json(data.ParsedResults[0].ParsedText)).then(fs.unlink(path.join(dirPath, files[0]), (err) => {
                            if (err)
                                res.status(500).send();
                        }))
                        .catch(err => {
                            if (err)
                                res.status(500).send();
                        });;
                }
            });
        }
    });
};

const ocrUrlController = (req, res) => {
    const url = req.body.link;
    console.log(req.body);
    const language = req.body.lang;
    ocrSpaceApiWrapper(url, { apiKey: process.env.API_KEY, language: language })
        .then(data => res.json(data.ParsedResults[0].ParsedText))
        .catch(err => {
            if (err)
                res.status(500).send();
        });
};

module.exports = { ocrFileController, ocrUrlController };