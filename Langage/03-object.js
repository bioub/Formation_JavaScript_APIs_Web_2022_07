// En JS de nombreux objets sont déjà instanciés
// Par le langage
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// Par une platforme, ex : Node.js
console.log('typeof process', typeof process); // object
console.log('typeof exports', typeof exports); // object
console.log('typeof console', typeof console); // object

// Par une platforme, ex : Browser
console.log('typeof window', typeof window); // object
console.log('typeof document', typeof document); // object
console.log('typeof console', typeof console); // object

// Les objets en JS sont des dictionnaires (comme Map en Java)

// A la clé sum de Math, rien n'est défini
console.log('typeof Math.sum', typeof Math.sum); // undefined
console.log('typeof Math.sqrt', typeof Math.sqrt); // function

// On peut ajouter la clé sum
Math.sum = function(a, b) {
  return a + b;
};

console.log('Math.sum(2, 3)', Math.sum(2, 3)); // 5

// On peut modifier la clé sum
Math.sum = function(a, b) {
  return Number(a) + Number(b);
};

console.log('Math.sum("2", "3")', Math.sum("2", "3")); // 5

// On peut supprimer la clé sum
delete Math.sum;
delete Math.sqrt;

console.log('typeof Math.sum', typeof Math.sum); // undefined
console.log('typeof Math.sqrt', typeof Math.sqrt); // undefined


// Pour créer nos propres objets
// 2 syntaxes : {} (object literal), new Contact() (constructor)

// si l'objet est simple à créer => object literal

// coords est objet avec 2 clés (x et y) qu'on peut appeler property
var coords = {
  x: 1,
  y: 2,
};

console.log('coords.x', coords.x); // 1

coords.z = 3;
console.log('coords.z', coords.z); // 3

// si on utilise object literal on évite d'y mettre des fonctions
// lorsque l'objet est créé plusieurs fois

var romain = {
  name: 'Romain',
  hello: function() {
    return 'Hello ' + this.name;
  }
}

var toto = {
  name: 'Toto',
  hello: function() {
    return 'Hello ' + this.name;
  }
}

// les fonction en JS sont elles mêmes des objets
// dans le code précédent on a créé 2 fonctions
// donc 2 objet

// si on compare les références, on obtient false
console.log('romain.hello === toto.hello', romain.hello === toto.hello); // false

// Dans ce cas on va plutôt utiliser la syntaxe constructor
function Contact(name) {
  this.name = name;
}

Contact.prototype.hello = function() {
  return 'Hello ' + this.name;
};

var romain = new Contact('Romain');
var eric = new Contact('Eric');

console.log('typeof Contact', typeof Contact); // function
console.log('typeof romain', typeof romain); // object
console.log('romain.name', romain.name); // Romain
console.log('romain.hello()', romain.hello()); // Romain

// Méthode statique (méthode de la classe/function constructeur)
// String.fromCharCode

// Méthode de l'objet
// String.prototype.charCodeAt

// si on compare les références, on obtient true
console.log('romain.hello === eric.hello', romain.hello === eric.hello); // true

console.log('romain instanceof Contact', romain instanceof Contact); // true
console.log('romain instanceof Object', romain instanceof Object); // true

