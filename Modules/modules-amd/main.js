// require.config({
//   modules: {
//     'hello': './hello'
//   }
// })

require(['./hello'/*, 'jquery'*/], function(hello, $) {
  'use strict';
  
  var prenoms = ['Romain', 'Jean', 'Eric'];

  for (var i = 0; i < prenoms.length; i++) {
    var prenom = prenoms[i];
    console.log(hello(prenom));
  }
});
