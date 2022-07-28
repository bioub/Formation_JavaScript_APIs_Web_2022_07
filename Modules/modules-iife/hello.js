// Module IIFE
// Immediately Invoked Function Expression
(function () {
  // le mode strict ES5 désactive mauvais comportement
  'use strict';

  function hello(name) {
    return 'Hello ' + name;
  }

  window.hello = hello;
})();
