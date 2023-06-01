const express = require("express");
const makeStoppable = require("stoppable");
const http = require("http");
const bodyParser = require("body-parser");
const router = require("./api/router");
const mongoose = require("mongoose");
const { mongoUrl } = require("../config");
const passport = require("passport");
const localStrategy = require("./auth/strategies/local");
const jwtStrategy = require("./auth/strategies/jwt");

const app = express();

app.use(bodyParser.json());

passport.use("login", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/", router);

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

const server = makeStoppable(http.createServer(app));

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("MongoDB has connected successfully on localhost:37017");
    server.listen(3000, () => {
      console.log("Express server is listening on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("Connection to MongoDB not successful");
  });

module.exports = () => {
  const stopServer = () => {
    return new Promise((resolve) => {
      server.stop(resolve);
    });
  };

  return new Promise((resolve, reject) => {
    if (!mongoose.connection.readyState) {
      reject(new Error("MongoDB connection failed"));
    } else {
      resolve(stopServer);
    }
  });
};
