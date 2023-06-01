const Task = require("../../../models/Task");

/**
 * Logic for reading and writing task data in data base
 */
class TasksService {
  /**
   * Checking if there is a task with this title
   */
  async checkUniqTitle(email, title) {
    try {
      const data = await Task.findOne({ email, title });
      if (data) {
        return false;
      }
      return true;
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /**
   * Creating new task
   */
  async addNewTask(email, title, description) {
    try {
      const newTask = new Task({ email, title, description, done: false });
      await newTask.save();
      return true;
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /**
   * Get all active task items
   */
  async getUserActiveTasksList(email) {
    try {
      return await Task.find({ email, done: false });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /**
   * Chenge task status from false(active) to true(done)
   */
  async changeTaskStatus(email, title) {
    try {
      const filter = { email, title };
      const update = { done: true };
      await Task.findOneAndUpdate(filter, update);
      return true;
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /**
   * Get all done task items
   */
  async getUserTasksDoneList(email) {
    try {
      return await Task.find({ email, done: true });
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /**
   * Update the title and description of a task
   */
  async updateTask(email, taskTitle, title, description) {
    try {
      const filter = { email, title: taskTitle };
      const update = { title, description };
      await Task.findOneAndUpdate(filter, update);
      return true;
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /**
   * Delete task
   */
  async deleteTask(email, title) {
    try {
      await Task.deleteOne({ email, title });
      return true;
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}

module.exports = new TasksService();
