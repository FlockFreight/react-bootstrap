"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bootstrapUtils = require("./utils/bootstrapUtils");

// TODO: `pullRight` doesn't belong here. There's no special handling here.
var propTypes = {
  pullRight: _propTypes["default"].bool
};
var defaultProps = {
  pullRight: false
};

var Badge = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.hasContent = function hasContent(children) {
    var _context;

    var result = false;
    (0, _forEach["default"])(_context = _react["default"].Children).call(_context, children, function (child) {
      if (result) {
        return;
      }

      if (child || child === 0) {
        result = true;
      }
    });
    return result;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        pullRight = _this$props.pullRight,
        className = _this$props.className,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["pullRight", "className", "children"]);

    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = (0, _extends2["default"])({}, (0, _bootstrapUtils.getClassSet)(bsProps), {
      'pull-right': pullRight,
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });
    return /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({}, elementProps, {
      className: (0, _classnames["default"])(className, classes)
    }), children);
  };

  return Badge;
}(_react["default"].Component);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

var _default = (0, _bootstrapUtils.bsClass)('badge', Badge);

exports["default"] = _default;
module.exports = exports["default"];