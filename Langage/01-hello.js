/** @param {string} name */
function hello(name) {
  return 'Hello ' + name;
}

var prenoms = ['Romain', 'Jean', 'Eric'];

for (var i = 0; i < prenoms.length; i++) {
  var prenom = prenoms[i];
  console.log(hello(prenom));
}
