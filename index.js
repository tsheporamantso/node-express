const http = require("http");
const fs = require("fs");

// const data = JSON.parse(bigText);

const server = http.createServer((req, res) => {
  // const bigText = fs.readFileSync("./content/big.txt", "utf8");
  // res.end(bigText);
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });

  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen("8000", "localhost", (err) => {
  err
    ? console.log("Something went wrong")
    : console.log("Listening to port 8000... on Localhost 127.0.0.1");
});
