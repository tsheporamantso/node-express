const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

/*
! Each time when I have the async await, wrap it with try/catch block..
*/
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME: \n${first},\n${second}`,
      { flag: "a" }
    );
    console.log(first, "\n", second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./content/first.txt")
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
