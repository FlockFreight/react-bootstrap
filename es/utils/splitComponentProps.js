import _Object$entries from "@babel/runtime-corejs3/core-js-stable/object/entries";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
export default function splitComponentProps(props, Component) {
  var _context;

  var componentPropTypes = Component.propTypes;
  var parentProps = {};
  var childProps = {};

  _forEachInstanceProperty(_context = _Object$entries(props)).call(_context, function (_ref) {
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