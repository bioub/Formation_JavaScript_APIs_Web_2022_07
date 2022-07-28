// Module IIFE
// Immediately Invoked Function Expression
(function () {
   // le mode strict ES5 désactive mauvais comportement
  'use strict';

  var prenoms = ['Romain', 'Jean', 'Eric'];

  for (var i = 0; i < prenoms.length; i++) {
    var prenom = prenoms[i];
    console.log(hello(prenom));
  }
}());