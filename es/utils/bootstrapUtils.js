import _Object$entries from "@babel/runtime-corejs3/core-js-stable/object/entries";
import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _trimInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/trim";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
// TODO: The publicly exposed parts of this should be in lib/BootstrapUtils.
import invariant from 'invariant';
import PropTypes from 'prop-types';
import { SIZE_MAP } from './StyleConfig';

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
      return fn.apply(void 0, _concatInstanceProperty(args).call(args, [Component]));
    };
  };
}

export function prefix(props, variant) {
  var _context;

  var bsClass = _trimInstanceProperty(_context = props.bsClass || '').call(_context);

  !(bsClass != null) ? process.env.NODE_ENV !== "production" ? invariant(false, 'A `bsClass` prop is required for this component') : invariant(false) : void 0;
  return bsClass + (variant ? "-" + variant : '');
}
export var bsClass = curry(function (defaultClass, Component) {
  var propTypes = Component.propTypes || (Component.propTypes = {});
  var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  propTypes.bsClass = PropTypes.string;
  defaultProps.bsClass = defaultClass;
  return Component;
});
export var bsStyles = curry(function (styles, defaultStyle, Component) {
  if (typeof defaultStyle !== 'string') {
    Component = defaultStyle;
    defaultStyle = undefined;
  }

  var existing = Component.STYLES || [];
  var propTypes = Component.propTypes || {};

  _forEachInstanceProperty(styles).call(styles, function (style) {
    if (_indexOfInstanceProperty(existing).call(existing, style) === -1) {
      existing.push(style);
    }
  });

  var propType = PropTypes.oneOf(existing); // expose the values on the propType function for documentation

  Component.STYLES = existing;
  propType._values = existing;
  Component.propTypes = _extends({}, propTypes, {
    bsStyle: propType
  });

  if (defaultStyle !== undefined) {
    var defaultProps = Component.defaultProps || (Component.defaultProps = {});
    defaultProps.bsStyle = defaultStyle;
  }

  return Component;
});
export var bsSizes = curry(function (sizes, defaultSize, Component) {
  if (typeof defaultSize !== 'string') {
    Component = defaultSize;
    defaultSize = undefined;
  }

  var existing = Component.SIZES || [];
  var propTypes = Component.propTypes || {};

  _forEachInstanceProperty(sizes).call(sizes, function (size) {
    if (_indexOfInstanceProperty(existing).call(existing, size) === -1) {
      existing.push(size);
    }
  });

  var values = [];

  _forEachInstanceProperty(existing).call(existing, function (size) {
    var mappedSize = SIZE_MAP[size];

    if (mappedSize && mappedSize !== size) {
      values.push(mappedSize);
    }

    values.push(size);
  });

  var propType = PropTypes.oneOf(values);
  propType._values = values; // expose the values on the propType function for documentation

  Component.SIZES = existing;
  Component.propTypes = _extends({}, propTypes, {
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
export function getClassSet(props) {
  var _classes;

  var classes = (_classes = {}, _classes[prefix(props)] = true, _classes);

  if (props.bsSize) {
    var bsSize = SIZE_MAP[props.bsSize] || props.bsSize;
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

export function splitBsProps(props) {
  var _context2;

  var elementProps = {};

  _forEachInstanceProperty(_context2 = _Object$entries(props)).call(_context2, function (_ref) {
    var propName = _ref[0],
        propValue = _ref[1];

    if (!isBsProp(propName)) {
      elementProps[propName] = propValue;
    }
  });

  return [getBsProps(props), elementProps];
}
export function splitBsPropsAndOmit(props, omittedPropNames) {
  var _context3;

  var isOmittedProp = {};

  _forEachInstanceProperty(omittedPropNames).call(omittedPropNames, function (propName) {
    isOmittedProp[propName] = true;
  });

  var elementProps = {};

  _forEachInstanceProperty(_context3 = _Object$entries(props)).call(_context3, function (_ref2) {
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

export function addStyle(Component) {
  for (var _len2 = arguments.length, styleVariant = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styleVariant[_key2 - 1] = arguments[_key2];
  }

  bsStyles(styleVariant)(Component);
}
export var _curry = curry;