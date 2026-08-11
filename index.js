const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.end(await fs.readFile("index.html"));
  } else if (req.url === "/about") {
    res.end(await fs.readFile("about.html"));
  } else if (req.url === "/contact") {
    res.end(await fs.readFile("contact-me.html"));
  } else {
    res.end(await fs.readFile("404.html"));
  }
});

server.listen(8080, () => {
  console.log("server is running at http://localhost:8080");
});
