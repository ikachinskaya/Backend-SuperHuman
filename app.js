const express = require("express");
const app = express();

//для работы с JSON файлами
const bodyParser = express.json(); //data stream->JSON->JS объект->req.body
app.use(bodyParser);

module.exports = app;