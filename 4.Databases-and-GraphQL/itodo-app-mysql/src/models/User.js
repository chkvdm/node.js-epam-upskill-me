const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Task = require("./Task");

const User = sequelize.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Task);
Task.belongsTo(User, {
  onDelete: "CASCADE",
  foreignKey: {
    allowNull: false,
  },
});

module.exports = User;
