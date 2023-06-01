const { Router } = require("express");
const { check } = require("express-validator");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const validate = require("../middlewares/validate");

module.exports = ({ usersService, tasksService }) => {
  const router = Router();

  router.post("/register", [
    check("email", "email field is required and should be valid email.")
      .notEmpty()
      .trim()
      .isEmail(),
    check("password", "password field is required and min length is 6 chars")
      .notEmpty()
      .isString()
      .trim()
      .isLength({
        min: 6
      }),
    validate
  ], async (request, response, next) => {
    try {
      const user = request.body;

      await usersService.registerUser(user);
      await tasksService.initUserTasks(user.email);

      response.end();
    } catch (e) {
      next(e);
    }
  });

  router.post("/login", [
    check("email", "email field is required and should be valid email.")
      .notEmpty()
      .trim()
      .isEmail(),
    check("password", "password field is required and min length is 6 chars")
      .notEmpty()
      .isString()
      .trim()
      .isLength({
        min: 6
      }),
    validate
  ], (request, response) => {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return response.status(400).json(info);
      }

      request.login(user, { session: false }, (err) => {
        if (err) {
          return response.json(err);
        }

        const token = jwt.sign(user, "asdfsfwefasdfwefwefsdf");
        return response.json({ user, token });
      });

    })(request, response);
  });


  return router;
}
