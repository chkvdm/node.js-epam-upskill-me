const { Router } = require("express");
const { check } = require("express-validator");
const validate = require("../middlewares/validate");

module.exports = ({ tasksService }) => {
  const router = Router();

  router.get("/", async (req, res, next) => {
    try {
      const tasks = await tasksService.getTodoTasks(req.user.email);

      res.json(tasks);
    } catch (e) {
      console.error(e);
      next(e);
    }
  });

  router.post(
    "/",
    [
      check("title")
        .exists()
        .isString()
        .isLength({ min: 3 })
        .trim()
        .escape()
        .withMessage("Minimal length for task name is 3 letter!"),
      check("description")
        .exists()
        .isString()
        .trim()
        .escape()
        .withMessage("Description field is required!"),
      validate
    ],
    async (req, res, next) => {
      try {
        const task = req.body;
        const { email } = req.user;

        if (await tasksService.taskExists(task.title, email)) {
          return res
                    .status(400)
                    .json({
                      errors: [
                        {
                          msg: `Task with title ${task.title} already exists!`,
                        }
                      ],
                    });
        }

        await tasksService.addTask(task, email);

        res
          .status(201)
          .end();
      } catch (e) {
        console.error(e);
        next(e);
      }
  });

  router.post("/done",
    [
      check("title")
        .exists()
        .isString()
        .trim()
        .escape()
        .withMessage("Title field is required!"),
      validate
  ],
    async (req, res, next) => {
      try {
        const { title } = req.body;
        const { email } = req.user;

        if (!(await tasksService.taskExists(title, email))) {
          return res
            .status(400)
            .json({
              errors: [
                {
                  msg: `Task ${title} does not exists!`,
                }
              ]
            });
        }

        await tasksService.markTaskAsDone(title, email);

        res
          .end();
      } catch(e) {
        console.error(e);
        next(e);
      }
  });

  router.get("/done", async (req, res, next) => {
    try {
      const tasks = await tasksService.getDoneTasks(req.user.email);

      res.json(tasks);
    } catch (e) {
      console.error(e);
      next(e);
    }
  })

  router.delete("/",
    [
      check("title")
        .exists()
        .isString()
        .trim()
        .escape()
        .withMessage("Title field is required!"),
      validate
    ],
  async (req, res, next) => {
    try {
      const { title } = req.body;
      const { email } = req.user;

      await tasksService.deleteTask(title, email);

      res
        .status(204)
        .end();
    } catch (e) {
      console.error(e);
      next(e);
    }
  });

  router.put(
    "/:taskTitle",
    [
      check("title")
        .exists()
        .isString()
        .isLength({ min: 3 })
        .trim()
        .escape()
        .withMessage("Minimal length for task name is 3 letter!"),
      check("description")
        .exists()
        .isString()
        .trim()
        .escape()
        .withMessage("Description field is required!"),
      validate
    ],
    async (req, res, next) => {
      try {
        const newTaskContent = req.body;
        const { taskTitle } = req.params;
        const { email } = req.user;


        if (!(await tasksService.taskExists(taskTitle, email))) {
          return res
            .status(404)
            .json({
              errors: [
                {
                  msg: `Task ${taskTitle} does not exists!`,
                }
              ]
            });
        }

        if (await tasksService.taskExists(newTaskContent.title, email)) {
          return res
            .status(400)
            .json({
              errors: [
                {
                  msg: `Task with title ${newTaskContent.title} already exists! Can not update task content!`,
                }
              ],
            });
        }

        await tasksService.updateTask(taskTitle, newTaskContent, email);

        res.end();
      } catch (e) {
        console.error(e);
        next(e);
      }
    });

  return router;
}
