import _sliceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/slice";
export default function capitalize(string) {
  return "" + string.charAt(0).toUpperCase() + _sliceInstanceProperty(string).call(string, 1);
}