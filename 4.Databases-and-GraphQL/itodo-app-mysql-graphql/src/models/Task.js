const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => Math.floor(Date.now()),
      get() {
        return new Date(this.getDataValue("id"));
      },
      set(value) {
        this.setDataValue("id", Math.floor(value.getTime()));
      },
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [],
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Task;
