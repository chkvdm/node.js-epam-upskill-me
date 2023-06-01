const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * Logic for reading and writing task data
 */
class TasksService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSON file that contains the tasks data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get all tasks items
   */
  async getTasksList() {
    const data = await this.getData();
    return data;
  }

  /**
   * Check a task duplicate
   */
  async checkTaskDuplicate(taskName) {
    const data = await this.getData();
    if (data.filter(task => task.taskName == taskName).length !== 0) {
      return true
    } 
    return false
  }

  /**
   * Returns a list of task with done status
   */
  async getDoneTasksList() {
    const data = await this.getData();
    return data.filter(task => task.taskStatus === "true")
  }

  /**
   * Returns a list of task with active
   */
  async getActiveTasksList() {
    const data = await this.getData();
    return data.filter(task => task.taskStatus === "false")
  }

  /**
   * Add a new task
   * @param {*} taskName The name of the user
   * @param {*} taskStatus The feedback message
   */
  async addNewTask(taskName, taskStatus) {
    const data = (await this.getData()) || [];
    data.push({ taskName, taskStatus });
    return writeFile(this.datafile, JSON.stringify(data));
  }  

  /**
   * Chenge task status from false(active) to true(done)
   */
  async changeTaskStatus(taskName) {
    const data = await this.getData();
    data.filter(task => task.taskStatus === "false" && task.taskName === taskName).forEach(task => task.taskStatus = "true")
    return writeFile(this.datafile, JSON.stringify(data));
  }

  /**
   * Fetches tasks data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }
}

module.exports = TasksService;