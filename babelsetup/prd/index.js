"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// babel setup with expressjs

// const express = require('express')

var app = (0, _express["default"])();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello eeeWoreld!');
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});