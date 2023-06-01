const express = require('express');

const doneRoute = require('./done');

const { check, validationResult } = require('express-validator');

const router = express.Router();

const path = require('path');

const TasksService = require('../services/TasksService');

const tasksServise = new TasksService(
  path.join(__dirname, '../data/task.json')
);

router.get('/', (request, response) => {
  const errors = request.session.task ? request.session.task.errors : false;
  const successMessage = request.session.task
    ? request.session.task.message
    : false;
  request.session.task = {};
  response.render('layout', {
    pageTitle: 'TODO',
    template: 'index',
    errors,
    successMessage,
  });
});

router.post(
  '/',
  [
    check('task')
      .trim()
      .escape()
      .isLength({ min: 3 })
      .withMessage('Minimal length for task name is 3 letter!')
      .custom(async (value) => {
        if (await tasksServise.checkTaskDuplicate(value)) {
          throw new Error(`Task ${value} already exists!`);
        }
      }),
  ],
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      request.session.task = {
        errors: errors.array(),
      };
      return response.redirect('/');
    }
    console.log(request);
    const { task } = request.body;
    await tasksServise.addNewTask(task, 'false');
    request.session.task = {
      message: 'Task was added!',
    };
    return response.redirect('/');
  }
);

router.post('/api/tasks/:taskName/done', async (request, response) => {
  const { taskName } = request.params;
  await tasksServise.changeTaskStatus(taskName);
  const tasks = await tasksServise.getTasksList();
  return response.json({ tasks });
});

router.use('/done', doneRoute);

module.exports = router;
