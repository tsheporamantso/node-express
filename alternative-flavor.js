module.exports.items = ["item1", "item2"];

const person = {
  name: "Dumisani",
  relationship: "Sibling",
};

module.exports.brother = person;

/*
! I WOULD PREFER TO EXPORT IN MANNER BELOW AND DESTRUCTURE ELEMENTS ON FILE I AM IMPORTING TO 
? BUT FOR VERSETILITY WILL EXPORT DIFFERENTLY.
*/
// module.exports = {
//   items,
//   person,
// };
