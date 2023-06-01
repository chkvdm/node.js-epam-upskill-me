const express = require("express");
const passport = require("passport");
const router = express.Router();
const taskController = require("./controller/TasksController");
const taskValidation = require("./validator/TaskValidator");
const taskTitleValidation = require("./validator/TaskTittleValidator");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  taskValidation,
  taskController.newTaskCreate
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  taskController.tasksActiveArray
);

router.post(
  "/done",
  passport.authenticate("jwt", { session: false }),
  taskTitleValidation,
  taskController.taskStatusChange
);

router.get(
  "/done",
  passport.authenticate("jwt", { session: false }),
  taskController.tasksDoneArray
);

router.put(
  "/:taskTitle",
  passport.authenticate("jwt", { session: false }),
  taskValidation,
  taskController.taskChange
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  taskTitleValidation,
  taskController.taskDelete
);

module.exports = router;
