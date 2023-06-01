const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Task;
