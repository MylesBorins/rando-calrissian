'use strict';

var rando = require('../lib');

var test = require('tap').test;

test('should return a random number: naive might fail', function (t) {
  var random = rando(700000000000);
  t.ok(random <= 700000000000, 'should be a random number in specified range');
  t.end();
});
