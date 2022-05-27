import _extends from "@babel/runtime-corejs3/helpers/esm/extends";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
import _objectWithoutPropertiesLoose from "@babel/runtime-corejs3/helpers/esm/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime-corejs3/helpers/esm/inheritsLoose";
import classNames from 'classnames';
import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import PagerItem from './PagerItem';
import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';
import createChainedFunction from './utils/createChainedFunction';
import ValidComponentChildren from './utils/ValidComponentChildren';
var propTypes = {
  onSelect: PropTypes.func
};

var Pager = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Pager, _React$Component);

  function Pager() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pager.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        onSelect = _this$props.onSelect,
        className = _this$props.className,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["onSelect", "className", "children"]);

    var _splitBsProps = splitBsProps(props),
        bsProps = _splitBsProps[0],
        elementProps = _splitBsProps[1];

    var classes = getClassSet(bsProps);
    return /*#__PURE__*/React.createElement("ul", _extends({}, elementProps, {
      className: classNames(className, classes)
    }), _mapInstanceProperty(ValidComponentChildren).call(ValidComponentChildren, children, function (child) {
      return /*#__PURE__*/cloneElement(child, {
        onSelect: createChainedFunction(child.props.onSelect, onSelect)
      });
    }));
  };

  return Pager;
}(React.Component);

Pager.propTypes = propTypes;
Pager.Item = PagerItem;
export default bsClass('pager', Pager);