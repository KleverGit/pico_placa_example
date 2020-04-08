// exports all files with express routes
const express = require('express');
const app = express();
app.use(require('./pico-placa.routes'));
module.exports = app;