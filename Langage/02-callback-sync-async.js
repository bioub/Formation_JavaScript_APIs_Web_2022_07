var firstNames = ["Romain", "Eric"];

// le callback de setTimeout est async, il sera appelé plus tard
// ne va pas être appelé par setTimeout, mais dans une pile
// d'appel futur
setTimeout(function cbSt() {
  console.log("Hello in 100ms");
}, 100);


firstNames.forEach(function cbFe(firstName) {
  console.log(firstName);
});

// callstack
// ^
// |             lg     lg
// |             cbFe - cbFe          lg
// |setTimeout - forEach     ..⟳..    cbSt
// 0ms--------------------------------100ms----------> temps
//               Romain Eric          Hello in 100ms

//
