class TasksService {
  constructor() {
    this.userTasks = {};
  }

  async initUserTasks(userEmail) {
    this.userTasks[userEmail] = [];
  }

  async addTask(task, userEmail) {
    this.userTasks[userEmail].push({
      ...task,
      done: false,
    });
  }

  async markTaskAsDone(taskTitle, userEmail) {
    const task = this.userTasks[userEmail].find(({ title }) => title === taskTitle);

    task.done = true;
  }

  async getDoneTasks(userEmail) {
    return this.userTasks[userEmail].filter(({ done }) => done);
  }

  async getTodoTasks(userEmail) {
    return this.userTasks[userEmail].filter(({ done }) => !done);
  }

  async taskExists(taskTitle, userEmail) {
    const task = this.userTasks[userEmail].find(({ title }) => title === taskTitle);

    return Boolean(task);
  }

  async deleteTask(taskTitle, userEmail) {
    this.userTasks[userEmail] = this.userTasks[userEmail].filter(({ title }) => title !== taskTitle);
  }

  async updateTask(taskTitle, newTaskContent, userEmail) {
    const index = this.userTasks[userEmail].findIndex(({ title }) => title === taskTitle);

    this.userTasks[userEmail][index] = {
      ...newTaskContent,
      done: this.userTasks[userEmail][index].done,
    };
  }

}

module.exports = TasksService;
