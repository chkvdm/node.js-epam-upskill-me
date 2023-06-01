const express = require("express");
const router = express.Router();
const userRouter = require("./auth/router");
const tasksRouter = require("./tasks/router");
const graphqlRouter = require("./graphql/router");

router.use("/api/auth", userRouter);
router.use("/api/tasks", tasksRouter);
router.use("/", graphqlRouter);

module.exports = router;
