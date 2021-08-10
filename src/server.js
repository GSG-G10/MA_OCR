const express = require('express');
const app = express();
const { homepageRouter, ocrRouter } = require('./Routes');
const port = 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: false }));



app.use('/', homepageRouter);

app.use(ocrRouter);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});