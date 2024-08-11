/*
! npm (node packaging manager)
* local dependencies - use it only in this partiucular project (npm i <packageName>) OR
* global dependencies - use it in any project (npm i -g <packageName>)
? package.json can be regarded as manifest file that stores important info about project (npm init -y) 
*/
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
