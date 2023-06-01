const express = require("express");
const makeStoppable = require("stoppable");
const http = require("http");
const bodyParser = require("body-parser");
const router = require("./api/router");
const sequelize = require("./config/database");
const { port } = require("../config");
const passport = require("passport");
const localStrategy = require("./auth/strategies/local");
const jwtStrategy = require("./auth/strategies/jwt");

const app = express();

app.use(bodyParser.json());

passport.use("login", localStrategy);
passport.use("jwt", jwtStrategy);

app.use("/", router);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err });
});

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => console.log("Unable to synchronize the database.", err));

const server = makeStoppable(http.createServer(app));

module.exports = () => {
  const stopServer = () => {
    return new Promise((resolve) => {
      server.stop(resolve);
    });
  };

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`Express server is listening on http://localhost:${port}`);
      resolve(stopServer);
    });
  });
};
