const express = require('express');
const fs = require('fs');
const app = express();

app.use('/', require('./src/routes/index.js'));

module.exports = app;