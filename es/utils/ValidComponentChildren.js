import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";
// TODO: This module should be ElementChildren, and should use named exports.
import React from 'react';
/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid components".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @return {object} Object containing the ordered map of results.
 */

function map(children, func, context) {
  var _context;

  var index = 0;
  return _mapInstanceProperty(_context = React.Children).call(_context, children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return child;
    }

    return func.call(context, child, index++);
  });
}
/**
 * Iterates through children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for context.
 */


function forEach(children, func, context) {
  var _context2;

  var index = 0;

  _forEachInstanceProperty(_context2 = React.Children).call(_context2, children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    func.call(context, child, index++);
  });
}
/**
 * Count the number of "valid components" in the Children container.
 *
 * @param {?*} children Children tree container.
 * @returns {number}
 */


function count(children) {
  var _context3;

  var result = 0;

  _forEachInstanceProperty(_context3 = React.Children).call(_context3, children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    ++result;
  });

  return result;
}
/**
 * Finds children that are typically specified as `props.children`,
 * but only iterates over children that are "valid components".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func.
 * @param {*} context Context for func.
 * @returns {array} of children that meet the func return statement
 */


function filter(children, func, context) {
  var _context4;

  var index = 0;
  var result = [];

  _forEachInstanceProperty(_context4 = React.Children).call(_context4, children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result.push(child);
    }
  });

  return result;
}

function find(children, func, context) {
  var _context5;

  var index = 0;
  var result;

  _forEachInstanceProperty(_context5 = React.Children).call(_context5, children, function (child) {
    if (result) {
      return;
    }

    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = child;
    }
  });

  return result;
}

function every(children, func, context) {
  var _context6;

  var index = 0;
  var result = true;

  _forEachInstanceProperty(_context6 = React.Children).call(_context6, children, function (child) {
    if (!result) {
      return;
    }

    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    if (!func.call(context, child, index++)) {
      result = false;
    }
  });

  return result;
}

function some(children, func, context) {
  var _context7;

  var index = 0;
  var result = false;

  _forEachInstanceProperty(_context7 = React.Children).call(_context7, children, function (child) {
    if (result) {
      return;
    }

    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    if (func.call(context, child, index++)) {
      result = true;
    }
  });

  return result;
}

function toArray(children) {
  var _context8;

  var result = [];

  _forEachInstanceProperty(_context8 = React.Children).call(_context8, children, function (child) {
    if (! /*#__PURE__*/React.isValidElement(child)) {
      return;
    }

    result.push(child);
  });

  return result;
}

export default {
  map: map,
  forEach: forEach,
  count: count,
  find: find,
  filter: filter,
  every: every,
  some: some,
  toArray: toArray
};