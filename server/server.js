// configuration global variables
require('../config/config');
// imports libriries
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

// import routes rest resrvices
app.use(require('../src/routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`Started server on port: ${process.env.PORT}`);
});

module.exports = app;