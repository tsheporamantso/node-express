const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/" || pathname === "/home") {
    res.end("Hello from the server!");
  } else {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(`
      <h1>Oops!</h1>
      <p>Page not found</p>
      <a href='/home'>Back to home page</a>
      `);
  }
});

server.listen("8000", "localhost", () => {
  console.log("Listerning to port 8000 on localhost");
});
