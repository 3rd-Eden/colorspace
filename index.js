'use strict';

var color = require('color')
  , hex = require('text-hex');

/**
 * Generate a color for a given name. But be reasonably smart about it by
 * understanding name spaces and coloring each namespace a bit lighter so they
 * still have the same base color as the root.
 *
 * @param {String} name The namespace
 * @returns {String} color
 * @api private
 */
module.exports = function colorspace(namespace, delimiter) {
  namespace = namespace.split(delimiter || ':');

  for (var base = hex(namespace[0]), i = 0, l = namespace.length - 1; i < l; i++) {
    base = color(base)
    .mix(color(hex(namespace[i + 1])))
    .saturate(1)
    .hex();
  }

  return base;
};
