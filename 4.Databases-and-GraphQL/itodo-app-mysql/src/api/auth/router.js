const express = require("express");
const router = express.Router();
const userController = require("./controller/UsersController");
const validation = require("./validator/registrerFormValidator");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { secretKey } = require("../../../config");

router.post("/register", validation, userController.register);

router.post("/login", validation, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).end();
  }
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).json(info);
      }
      const token = jwt.sign({ email: user.email }, secretKey);
      return res
        .status(200)
        .json({ user: { email: user.email }, token: token });
    } catch (err) {
      next(err);
    }
  })(req, res, next);
});

module.exports = router;
