const Task = require("../../../models/Task");
const { Sequelize } = require("sequelize");

/**
 * Logic for reading and writing task data in data base
 */
class TasksService {
  /**
   * Checking if there is a task with this title
   */
  async checkUniqTitle(userId, title) {
    const data = await Task.findOne({
      where: { userId, title },
    });
    if (data) {
      return false;
    }
    return true;
  }

  /**
   * Creating new task
   */
  async addNewTask(userId, title, description, tags = []) {
    const task = await Task.create({
      userId,
      title,
      description,
      tags,
      done: false,
    });
    return task;
  }

  /**
   * Get one task by id
   */
  async getOneTask(userId, id) {
    const data = await Task.findOne({
      where: {
        userId,
        id,
      },
    });
    return data;
  }

  /**
   * Get all active task items
   */
  async getUserActiveTasksList(userId) {
    const data = await Task.findAll({
      where: {
        userId,
        done: false,
      },
    });
    return data;
  }

  /**
   * Search tasks by tags
   */
  async findTasksByTags(userId, tags) {
    const tasks = await Task.findAll({
      where: {
        userId,
        [Sequelize.Op.and]: Sequelize.literal(
          `JSON_CONTAINS(tags, '${JSON.stringify(tags)}')`
        ),
      },
    });
    return tasks;
  }

  /**
   * Chenge task status from false(active) to true(done)
   */
  async changeTaskStatus(userId, title) {
    await Task.update(
      { done: true },
      {
        where: {
          userId,
          title,
        },
      }
    );
    return true;
  }

  /**
   * Get all done task items
   */
  async getUserTasksDoneList(userId) {
    const data = await Task.findAll({
      where: {
        userId,
        done: true,
      },
    });
    return data;
  }

  /**
   * Update the title and description of a task
   */
  async updateTask(userId, taskTitle, title, description) {
    await Task.update(
      { title: title, description: description },
      {
        where: {
          userId,
          title: taskTitle,
        },
      }
    );
    const data = await this.getOneTask(userId, title);
    return data;
  }

  /**
   * Delete task by title
   */
  async deleteTask(userId, title) {
    await Task.destroy({
      where: {
        userId,
        title,
      },
    });
    return true;
  }

  /**
   * Delete task by id
   */
  async deleteTaskById(userId, id) {
    await Task.destroy({
      where: {
        userId,
        id,
      },
    });
    return true;
  }

  /**
   * Update the title, description and done of a task by id
   */
  async updateTaskById(userId, id, title, description, tags, done) {
    await Task.update(
      { title, description, tags, done },
      {
        where: {
          userId,
          id,
        },
      }
    );
    const data = await this.getOneTask(userId, id);
    return data;
  }
}

module.exports = new TasksService();
