const { tshepo, dumi } = require("./names"); // DESTRUCTURING.
const sayHi = require("./sayHi");
const { brother, items } = require("./alternative-flavor"); // PREFER DESTRUCTURING.

sayHi(dumi);
sayHi(tshepo);
sayHi("Mama");

console.log(items, brother);
