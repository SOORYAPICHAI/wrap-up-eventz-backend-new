const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const passport = require("passport");
require("./server/initializers/passport");
require("./server/config/config.js");

// Set up the express app
const app = express();

// cors
app.use(cors());

// Log requests to the console.
app.use(logger("dev"));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// Require our routes into the application.
require("./server/routes")(app);

app.get("*", (req, res) =>
  res.status(404).send({
    message: "API not found.",
  })
);

module.exports = app;
