import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils'; // TODO: `pullRight` doesn't belong here. There's no special handling here.

var propTypes = {
  pullRight: PropTypes.bool
};
var defaultProps = {
  pullRight: false
};

var Badge = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Badge, _React$Component);

  function Badge() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Badge.prototype;

  _proto.hasContent = function hasContent(children) {
    var _context;

    var result = false;

    _forEachInstanceProperty(_context = React.Children).call(_context, children, function (child) {
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
        props = _objectWithoutPropertiesLoose(_this$props, ["pullRight", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), {
      'pull-right': pullRight,
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return /*#__PURE__*/React.createElement("span", _extends({}, elementProps, {
      className: classNames(className, classes)
    }), children);
  };

  return Badge;
}(React.Component);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
export default bsClass('badge', Badge);