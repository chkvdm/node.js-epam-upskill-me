const express = require("express");
const bodyParser = require("body-parser");
const makeStoppable = require("stoppable");
const http = require("http");
const passport = require("passport");

const UsersService = require("./services/users.service");
const TasksService = require("./services/tasks.service");
const setupPassport = require("./libs/passport");

const makeTasksRouter = require("./routes/tasks");
const makeAuthRouter = require("./routes/auth");

const app = express();

app.use(bodyParser.json());

const usersService = new UsersService();
const tasksService = new TasksService();

const tasksRouter = makeTasksRouter({ tasksService });
const authRouter = makeAuthRouter({ usersService, tasksService });

setupPassport({ usersService });

app.use(
  "/api/tasks",
  passport.authenticate("jwt", { session: false }),
  tasksRouter
);
app.use("/api/auth", authRouter);

const server = makeStoppable(http.createServer(app));

module.exports = () => {
  const stopServer = () => {
    return new Promise((resolve) => {
      server.stop(resolve);
    });
  };

  return new Promise((resolve) => {
    server.listen(3000, () => {
      console.log("Express server is listening on http://localhost:3000");
      resolve(stopServer);
    });
  });
};
