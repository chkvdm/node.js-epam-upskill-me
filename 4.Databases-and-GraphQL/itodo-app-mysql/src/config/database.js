const Sequelize = require("sequelize");
const {
  database,
  dbUser,
  dbPassword,
  dbHost,
  dialect,
} = require("../../../config");

const sequelize = new Sequelize(database, dbUser, dbPassword, {
  dialect,
  dbHost,
});

module.exports = sequelize;
