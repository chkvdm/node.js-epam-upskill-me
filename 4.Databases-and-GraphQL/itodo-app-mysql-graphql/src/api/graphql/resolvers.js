const taskService = require("../tasks/service/TaskService");

const resolvers = {
  async getTodoTasks({}, request) {
    try {
      const userId = request.user;
      const userActiveTaskList = await taskService.getUserActiveTasksList(
        userId
      );
      return userActiveTaskList;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getDoneTasks({}, request) {
    try {
      const userId = request.user;
      const userTaskDoneList = await taskService.getUserTasksDoneList(userId);
      return userTaskDoneList;
    } catch (err) {
      throw new Error(err);
    }
  },

  async getTask({ id }, request) {
    try {
      const userId = request.user;
      const userTaskDoneList = await taskService.getOneTask(userId, id);
      return userTaskDoneList;
    } catch (err) {
      throw new Error(err);
    }
  },

  async findTasks({ tags }, request) {
    try {
      const userId = request.user;
      const data = await taskService.findTasksByTags(userId, tags);
      return data;
    } catch {
      throw new Error(err);
    }
  },

  async createTask({ input }, request) {
    try {
      const userId = request.user;
      // Cheking the task tittle for uniqueness
      const titleIsUniq = await taskService.checkUniqTitle(userId, input.title);
      if (!titleIsUniq) {
        throw new Error("Task with the same title already exists");
      }
      // Creating new task
      const data = await taskService.addNewTask(
        userId,
        input.title,
        input.description,
        input.tags
      );
      return data;
    } catch (err) {
      throw new Error(err);
    }
  },

  async updateTask({ id, input }, request) {
    try {
      const userId = request.user;
      const updateTask = await taskService.updateTaskById(
        userId,
        id,
        input.title,
        input.description,
        input.tags,
        input.done
      );
      return updateTask;
    } catch (err) {
      throw new Error(err);
    }
  },

  async deleteTask({ id }, request) {
    try {
      const userId = request.user;
      await taskService.deleteTaskById(userId, id);
      return true;
    } catch (err) {
      throw new Error(err);
    }
  },
};

module.exports = resolvers;
