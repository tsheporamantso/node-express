const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync(`${__dirname}/content/first.txt`, "utf8");
const second = readFileSync(`${__dirname}/content/second.txt`, "utf8");

/*
! TO APPEND ON THE FILE YOU WRITTING TO, YOU WILL PASS THE THIRD ARGUMENT THAT IS AN OBJECT WITH KEY is flag: and VALUE IS : 'a'
*/
writeFileSync(`${__dirname}/content/final.txt`, `${first}\n${second}`, {
  flag: "a",
});
