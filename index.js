/*!
 * each-string-index <https://github.com/jonschlinkert/each-string-index>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function eachStringIndex(pattern, str) {
  if (pattern == null) {
    return [];
  }
  var arr = [];
  var num = 0;
  var i = -1;

  while (num !== -1) {
    num = str.indexOf(pattern, i + 1);
    if (i !== -1) {
      arr.push(i);
    }
    i = num;
  }
  return arr;
};
