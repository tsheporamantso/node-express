const { tshepo, dumi } = require("./names"); // DESTRUCTURING.
const sayHi = require("./sayHi");
const { brother, items } = require("./alternative-flavor"); // PREFER DESTRUCTURING.
require("./mind-grenade");
sayHi(dumi);
sayHi(tshepo);
sayHi("Mama");

console.log(items, brother);
