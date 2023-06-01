const Task = require("../../../models/Task");

/**
 * Logic for reading and writing task data in data base
 */
class TasksService {
  /**
   * Checking if there is a task with this title
   */
  async checkUniqTitle(email, title) {
    const data = await Task.findOne({
      where: { userEmail: email, title: title },
    });
    if (data) {
      return false;
    }
    return true;
  }

  /**
   * Creating new task
   */
  async addNewTask(email, title, description) {
    await Task.create({
      title: title,
      description: description,
      done: false,
      userEmail: email,
    });
    return true;
  }

  /**
   * Get all active task items
   */
  async getUserActiveTasksList(email) {
    const data = await Task.findAll({
      where: {
        userEmail: email,
        done: false,
      },
    });
    return data;
  }

  /**
   * Chenge task status from false(active) to true(done)
   */
  async changeTaskStatus(email, title) {
    await Task.update(
      { done: true },
      {
        where: {
          userEmail: email,
          title: title,
        },
      }
    );
    return true;
  }

  /**
   * Get all done task items
   */
  async getUserTasksDoneList(email) {
    const data = await Task.findAll({
      where: {
        userEmail: email,
        done: true,
      },
    });
    return data;
  }

  /**
   * Update the title and description of a task
   */
  async updateTask(email, taskTitle, title, description) {
    await Task.update(
      { title: title, description: description },
      {
        where: {
          userEmail: email,
          title: taskTitle,
        },
      }
    );
    return true;
  }

  /**
   * Delete task
   */
  async deleteTask(email, title) {
    await Task.destroy({
      where: {
        userEmail: email,
        title: title,
      },
    });
  }
}

module.exports = new TasksService();
