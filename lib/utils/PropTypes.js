"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports.generatedId = generatedId;
exports.requiredRoles = requiredRoles;
exports.exclusiveRoles = exclusiveRoles;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _some = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/some"));

var _every = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/every"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createChainableTypeChecker = _interopRequireDefault(require("prop-types-extra/lib/utils/createChainableTypeChecker"));

var _ValidComponentChildren = _interopRequireDefault(require("./ValidComponentChildren"));

var idPropType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]);

function generatedId(name) {
  return function (props) {
    var error = null;

    if (!props.generateChildId) {
      var _context;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      error = idPropType.apply(void 0, (0, _concat["default"])(_context = [props]).call(_context, args));

      if (!error && !props.id) {
        error = new Error("In order to properly initialize the " + name + " in a way that is accessible to assistive technologies " + ("(such as screen readers) an `id` or a `generateChildId` prop to " + name + " is required"));
      }
    }

    return error;
  };
}

function requiredRoles() {
  for (var _len2 = arguments.length, roles = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    roles[_key2] = arguments[_key2];
  }

  return (0, _createChainableTypeChecker["default"])(function (props, propName, component) {
    var missing;
    (0, _every["default"])(roles).call(roles, function (role) {
      if (!(0, _some["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], props.children, function (child) {
        return child.props.bsRole === role;
      })) {
        missing = role;
        return false;
      }

      return true;
    });

    if (missing) {
      return new Error("(children) " + component + " - Missing a required child with bsRole: " + (missing + ". " + component + " must have at least one child of each of ") + ("the following bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}

function exclusiveRoles() {
  for (var _len3 = arguments.length, roles = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    roles[_key3] = arguments[_key3];
  }

  return (0, _createChainableTypeChecker["default"])(function (props, propName, component) {
    var duplicate;
    (0, _every["default"])(roles).call(roles, function (role) {
      var childrenWithRole = (0, _filter["default"])(_ValidComponentChildren["default"]).call(_ValidComponentChildren["default"], props.children, function (child) {
        return child.props.bsRole === role;
      });

      if (childrenWithRole.length > 1) {
        duplicate = role;
        return false;
      }

      return true;
    });

    if (duplicate) {
      return new Error("(children) " + component + " - Duplicate children detected of bsRole: " + (duplicate + ". Only one child each allowed with the following ") + ("bsRoles: " + roles.join(', ')));
    }

    return null;
  });
}