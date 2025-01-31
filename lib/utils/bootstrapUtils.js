"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports.prefix = prefix;
exports.getClassSet = getClassSet;
exports.splitBsProps = splitBsProps;
exports.splitBsPropsAndOmit = splitBsPropsAndOmit;
exports.addStyle = addStyle;
exports._curry = exports.bsSizes = exports.bsStyles = exports.bsClass = void 0;

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/entries"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _invariant = _interopRequireDefault(require("invariant"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyleConfig = require("./StyleConfig");

// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.
function curry(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var last = args[args.length - 1];

    if (typeof last === 'function') {
      return fn.apply(void 0, args);
    }

    return function (Component) {
      return fn.apply(void 0, (0, _concat["default"])(args).call(args, [Component]));
    };
  };
}

function prefix(props, variant) {
  var _context;

  var bsClass = (0, _trim["default"])(_context = props.bsClass || '').call(_context);
  !(bsClass != null) ? process.env.NODE_ENV !== "production" ? (0, _invariant["default"])(false, 'A `bsClass` prop is required for this component') : invariant(false) : void 0;
  return bsClass + (variant ? "-" + variant : '');
}

var bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  propTypes.bsClass = _propTypes["default"].string;
  defaultProps.bsClass = defaultClass;
  return Component;
});
exports.bsClass = bsClass;
var bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};
  (0, _forEach["default"])(styles).call(styles, function (style) {
    if ((0, _indexOf["default"])(existing).call(existing, style) === -1) {
      existing.push(style);
    }
  });

  var propType = _propTypes["default"].oneOf(existing); // expose the values on the propType function for documentation


  Component.STYLES = existing;
  propType._values = existing;
  Component.propTypes = (0, _extends2["default"])({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});
exports.bsStyles = bsStyles;
var bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};
  (0, _forEach["default"])(sizes).call(sizes, function (size) {
    if ((0, _indexOf["default"])(existing).call(existing, size) === -1) {
      existing.push(size);
    }
  });
  var values = [];
  (0, _forEach["default"])(existing).call(existing, function (size) {
    var mappedSize = _StyleConfig.SIZE_MAP[size];

    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = _propTypes["default"].oneOf(values);

  propType._values = values; // expose the values on the propType function for documentation

  Component.SIZES = existing;
  Component.propTypes = (0, _extends2["default"])({}, propTypes, {
    bsSize: propType
  });

  if (defaultSize !== undefined) {
    if (!Component.defaultProps) {
      Component.defaultProps = {};
    }

    Component.defaultProps.bsSize = defaultSize;
  }

  return Component;
});
exports.bsSizes = bsSizes;

function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = _StyleConfig.SIZE_MAP[props.bsSize] || props.bsSize;
    classes[prefix(props, bsSize)] = true;
  }

  if (props.bsStyle) {
    classes[prefix(props, props.bsStyle)] = true;
  }

  return classes;
}

function getBsProps(props) {
  return {
    bsClass: props.bsClass,
    bsSize: props.bsSize,
    bsStyle: props.bsStyle,
    bsRole: props.bsRole
  };
}

function isBsProp(propName) {
  return propName === 'bsClass' || propName === 'bsSize' || propName === 'bsStyle' || propName === 'bsRole';
}

function splitBsProps(props) {
  var _context2;

  var elementProps = {};
  (0, _forEach["default"])(_context2 = (0, _entries["default"])(props)).call(_context2, function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });
  return [getBsProps(props), elementProps];
}

function splitBsPropsAndOmit(props, omittedPropNames) {
  var _context3;

  var isOmittedProp = {};
  (0, _forEach["default"])(omittedPropNames).call(omittedPropNames, function (propName) {
    isOmittedProp[propName] = true;
  });
  var elementProps = {};
  (0, _forEach["default"])(_context3 = (0, _entries["default"])(props)).call(_context3, function (_ref2) {
    var propName = _ref2[0],
        propValue = _ref2[1];

    if (!isBsProp(propName) && !isOmittedProp[propName]) {
      elementProps[propName] = propValue;
    }
  });
  return [getBsProps(props), elementProps];
}
/**
 * Add a style variant to a Component. Mutates the propTypes of the component
 * in order to validate the new variant.
 */


function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant)(Component);
}

var _curry = curry;
exports._curry = _curry;