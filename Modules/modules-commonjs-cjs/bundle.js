// ce fichier a été généré avec browserify :
// npx browserify main.js > bundle.js
// la bibliothèque moderne pour builder des modules : webpack
(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = 'function' == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = 'MODULE_NOT_FOUND'), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t,
        );
      }
      return n[i].exports;
    }
    for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        // function (exports, require) {
        'use strict';

        function hello(name) {
          return 'Hello ' + name;
        }

        exports.hello = hello;

        // }
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        // function (exports, require) {
        'use strict';

        var hello = require('./hello').hello;

        var prenoms = ['Romain', 'Jean', 'Eric'];

        for (var i = 0; i < prenoms.length; i++) {
          var prenom = prenoms[i];
          console.log(hello(prenom));
        }

        // }
      },
      { './hello': 1 },
    ],
  },
  {},
  [2],
);
