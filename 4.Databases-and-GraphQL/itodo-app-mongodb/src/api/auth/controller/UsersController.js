const userService = require("../service/UserService");
const { validationResult } = require("express-validator");
const User = require("../../../models/User");

/**
 * Logic for user authentication. Сontroller functions for /register endpoint
 */
class UserController {
  async register(request, response, next) {
    try {
      // Validating registration form
      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).end();
      }
      const { email, password } = request.body;
      // Cheking the candidate's email for uniqueness
      const candidateEmailIsUniq = await userService.checkUniqEmail(email);
      if (!candidateEmailIsUniq) {
        return response
          .status(400)
          .json({ message: "This email already exists" });
      }
      // Hashing the candidate password
      const hashPassword = await User.hashPassword(password);
      // Registring a candidate as new user
      await userService.addNewUser(email, hashPassword);
      return response.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();