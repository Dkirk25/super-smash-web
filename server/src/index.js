const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");

const app = express();

const port = process.env.PORT || 3001;

// This is the relative path to your "client/build" directory
const REACT_APP_PATH = path.join(__dirname, "../../client/build");

/**
 * Server Middlewares
 */
app.use(helmet());
app.use(morgan("tiny"));

/**
 * Tells express to serve this folder and all of its files as a static "endpoint"
 *
 * We have it pointing to our react app's "build" or production/distribution folder
 */
app.use(express.static(REACT_APP_PATH));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(REACT_APP_PATH, "index.html"));
});

app.listen(port, () => {
  console.log(`Roger Roger, port: ${port}`);
});
