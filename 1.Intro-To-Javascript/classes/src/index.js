class Task {
    constructor (name) {
        this.name = name;
    }
}

class Guest {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getTask(indexNum) {
        return this.tasks[indexNum];
    }
    createTask() {
        throw new Error('method \'createTask\' is not defined');
    }
    changeType() {
        throw new Error('method \'changeType\' is not defined');
    }
}

class User {
    constructor(tasks) {
        this.tasks = tasks;
    }
    createTask(task) {
        this.tasks.push(task);
    }
    getTask(indexNum) {
        return this.tasks[indexNum];
    }
}

class Admin {
    constructor(peoples) {
        this.peoples = peoples;
    }
    getArray() {
        let ppl = [];
        for (let x of this.peoples) {
            ppl.push(x)
        }
        return ppl;
    }
    changeType(peopleNumber) {
        if (this.peoples[peopleNumber] instanceof Guest) {
            this.peoples[peopleNumber] = new User(this.peoples[peopleNumber].tasks)
        } else {
            this.peoples[peopleNumber] = new Guest(this.peoples[peopleNumber].tasks)
        }
    }
}

module.exports.Task = Task;
module.exports.Guest = Guest;
module.exports.User = User;
module.exports.Admin = Admin;
