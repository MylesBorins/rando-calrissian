'use strict';

var rando = require('../lib');

var test = require('tap').test;

test('should return a random number: naive might fail', function (t) {
  var random = rando();
  t.ok(random <= 1 && random >= 0, 'should be a random number in specified range');
  t.end();
});
