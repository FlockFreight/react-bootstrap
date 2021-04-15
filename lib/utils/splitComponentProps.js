"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = splitComponentProps;

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

function splitComponentProps(props, Component) {
  var _context;

  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};
  (0, _forEach["default"])(_context = (0, _entries["default"])(props)).call(_context, function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (componentPropTypes[propName]) {
      parentProps[propName] = propValue;
    } else {
      childProps[propName] = propValue;
    }
  });
  return [parentProps, childProps];
}

module.exports = exports["default"];