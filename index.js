/*!
 * each-string-index <https://github.com/jonschlinkert/each-string-index>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function eachStringIdx(ch, str) {
  var i = str.indexOf(ch);
  var arr = [];

  while (i !== -1) {
    arr.push(i);
    i = str.indexOf(ch, i + 1);
  }
  return arr;
};
