const { check } = require("express-validator");

const validation = [
  check("title").notEmpty().isString().trim().escape(),
  check("description").notEmpty().isString().trim().escape(),
];

module.exports = validation;
