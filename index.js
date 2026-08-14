const express = require("express");
const app = express();

const options = { root: __dirname };

app.get("/", (req, res) => res.sendFile("./index.html", options));
app.get("/about", (req, res) => res.sendFile("./about.html", options));
app.get("/contact", (req, res) => res.sendFile("./contact-me.html", options));
app.use((req, res) => {
  res.sendFile("/404.html", options);
});

const PORT = 3000;

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Server is listening on port ${PORT}`);
});
