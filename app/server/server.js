'use strict';

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(process.env.WEB_PORT, function () {
  console.log('app listening on port %s', process.env.WEB_PORT);
});
