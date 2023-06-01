const express = require("express");
const router = express.Router();
const userRouter = require("./auth/router");
const tasksRouter = require("./tasks/router");

router.use("/api/auth", userRouter);
router.use("/api/tasks", tasksRouter);

module.exports = router;
