const { writeFileSync } = require("fs");

for (let i = 0; i < 1000; i++) {
  writeFileSync(`${__dirname}/content/big.txt`, `I love you Dumi ${i}\n`, {
    flag: "a",
  });
}
