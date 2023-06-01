const { check } = require("express-validator");

const validation = [
  check("email").trim().escape().notEmpty().isEmail().normalizeEmail(),
  check("password").trim().escape().notEmpty().isLength({ min: 6 }),
];

module.exports = validation;
