"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = capitalize;

var _slice = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/slice"));

function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + (0, _slice["default"])(string).call(string, 1);
}

module.exports = exports["default"];