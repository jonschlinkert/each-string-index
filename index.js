/*!
 * each-string-index <https://github.com/jonschlinkert/each-string-index>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

module.exports = function eachStringIndex(str, line) {
  var num = 0, i = -1; arr = [];
  while (num !== -1) {
    num = line.indexOf(str, i + 1);
    if (i !== -1) {
      arr.push(i);
    }
    i = num;
  }
  return arr;
}
