const taskService = require("../service/TaskService");
const { validationResult } = require("express-validator");

/**
 * Сontroller functions for /tasks endpoint
 */
class TasksController {
  /**
   * Create new task
   */
  async newTaskCreate(request, response, next) {
    try {
      // Validating task form
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response
          .status(400)
          .json({ message: "Wrong entry in title or description field" });
      }
      const { title, description } = request.body;
      const email = request.user;
      // Cheking the task tittle for uniqueness
      const titleIsUniq = await taskService.checkUniqTitle(email, title);
      if (!titleIsUniq) {
        return response
          .status(400)
          .json({ message: "A task with the same name already exists" });
      }
      // Creating new task
      await taskService.addNewTask(email, title, description);
      return response.status(201).end();
    } catch (err) {
      next(err);
    }
  }

  /**
   * Active user's tasks
   */
  async tasksActiveArray(request, response, next) {
    try {
      const email = request.user;
      const userActiveTaskList = await taskService.getUserActiveTasksList(
        email
      );
      const userActiveTaskToDisplay = [];
      userActiveTaskList.filter((task) =>
        userActiveTaskToDisplay.push({
          done: task.done,
          title: task.title,
          description: task.description,
        })
      );
      return response.status(200).json(userActiveTaskToDisplay);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Task status change
   */
  async taskStatusChange(request, response, next) {
    try {
      // Validating task tittle form
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response
          .status(400)
          .json({ message: "Wrong entry in title field" });
      }
      const { title } = request.body;
      const email = request.user;
      // Cheking if such a task exists
      const taskIsExist = await taskService.checkUniqTitle(email, title);
      if (taskIsExist) {
        return response.status(404).json({ message: "Task not found" });
      }
      // Changing status
      await taskService.changeTaskStatus(email, title);
      return response.status(200).end();
    } catch (err) {
      next(err);
    }
  }

  /**
   * Done user's tasks
   */
  async tasksDoneArray(request, response, next) {
    try {
      const email = request.user;
      const userTaskDoneList = await taskService.getUserTasksDoneList(email);
      const userDoneTaskToDisplay = [];
      userTaskDoneList.filter((task) =>
        userDoneTaskToDisplay.push({
          done: task.done,
          title: task.title,
          description: task.description,
        })
      );
      return response.status(200).json(userDoneTaskToDisplay);
    } catch (err) {
      next(err);
    }
  }

  /**
   * Update task
   */
  async taskChange(request, response, next) {
    try {
      // Validating task form
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response
          .status(400)
          .json({ message: "Wrong entry in title or description field" });
      }
      const { taskTitle } = request.params;
      const { title, description } = request.body;
      const email = request.user;
      // Cheking if such a task exists
      const taskIsExist = await taskService.checkUniqTitle(email, taskTitle);
      if (taskIsExist) {
        return response.status(404).json({ message: "Task not found" });
      }
      // Cheking the task tittle for uniqueness
      const taskUpdateIsExist = await taskService.checkUniqTitle(email, title);
      if (!taskUpdateIsExist) {
        return response
          .status(400)
          .json({ message: "A task with the same name already exists" });
      }
      // Updating the task
      await taskService.updateTask(email, taskTitle, title, description);
      return response.status(200).end();
    } catch (err) {
      next(err);
    }
  }

  /**
   * Delete task
   */
  async taskDelete(request, response, next) {
    try {
      // Validating task tittle form
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ message: "Incorrect one of field" });
      }
      const { title } = request.body;
      const email = request.user;
      // Delete task
      await taskService.deleteTask(email, title);
      return response.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new TasksController();