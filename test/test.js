/*!
 * each-string-index <https://github.com/jonschlinkert/each-string-index>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var assert = require('assert');
var each = require('../');

describe('eachStringIndex:', function () {
  it('should get the index for each occurrence.', function () {
    assert.deepEqual(each('b', 'a b c d b e b f'), [2, 8, 12]);
    assert.deepEqual(each('b', 'bb c d b e b f'), [0, 1, 7, 11]);
    assert.deepEqual(each('foo', 'bb foo bar foo bar foo'), [3, 11, 19]);
  });
});