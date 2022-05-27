import _Object$values from "@babel/runtime-corejs3/core-js-stable/object/values";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";

var _context2;

import classNames from 'classnames';
import React from 'react';
import { bsClass, bsStyles, getClassSet, splitBsProps } from './utils/bootstrapUtils';
import { State, Style } from './utils/StyleConfig';

var Label = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Label, _React$Component);

  function Label() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Label.prototype;

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
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = _extends({}, getClassSet(bsProps), {
      // Hack for collapsing on IE8.
      hidden: !this.hasContent(children)
    });

    return /*#__PURE__*/React.createElement("span", _extends({}, elementProps, {
      className: classNames(className, classes)
    }), children);
  };

  return Label;
}(React.Component);

export default bsClass('label', bsStyles(_concatInstanceProperty(_context2 = []).call(_context2, _Object$values(State), [Style.DEFAULT, Style.PRIMARY]), Style.DEFAULT, Label));