// function (exports, require) {
  'use strict';

  var hello = require('./hello').hello;

  var prenoms = ['Romain', 'Jean', 'Eric'];
  
  for (var i = 0; i < prenoms.length; i++) {
    var prenom = prenoms[i];
    console.log(hello(prenom));
  }
  
// }