const http = require("http");

/*
! USUAL SERVER CREATION
*/
// const server = http.createServer((req, res) => {
//   res.end("Welcome to server");
// });

/*
! USING EVENT EMITTER API
*/
const server = http.createServer();
//emits request event
server.on("request", (req, res) => {
  res.end("Welcome!");
});
server.listen("8000", "localhost", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Listerning to port: 8000... on localhost: 127.0.0.1");
  }
});
