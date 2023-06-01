const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
