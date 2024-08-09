const path = require("path");

/*
! Platform seperator
*/
console.log(path.sep);

/*
! normalized file path
*/
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

/*
! base name
*/

const base = path.basename(filePath);
console.log(base);

/*
! path.resolve method 
? this method returns an absolute path.
*/

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
