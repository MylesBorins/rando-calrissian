'use strict';

// node modules
var fs = require('fs');
var path = require('path');

// npm modules

var pictureTube = require('picture-tube');

// internal data

var quotes = require('./quotes.json');

// tube pipeline

var tube = pictureTube();
tube.pipe(process.stdout);

function rando(scaler) {
  if (!scaler) {
    scaler = 100;
  }
  var rand = Math.random();

  var mebeh = Math.floor(rand * scaler);
  if (quotes.length > mebeh) {
    var stream = fs.createReadStream(path.join(__dirname, 'lando.png')).pipe(tube);
    stream.on('end', function () {
      console.error(new Error(quotes[mebeh]));
      process.exit(1);
    });
  }
  else {
    return rand;
  }
}

module.exports = rando;
