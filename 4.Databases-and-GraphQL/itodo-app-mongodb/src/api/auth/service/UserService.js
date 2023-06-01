const User = require("../../../models/User");

/**
 * Сhecking if such an email exists in the database
 */
class UserService {
  async checkUniqEmail(email) {
    const data = await User.findOne({ email });
    if (!data) {
      return true;
    }
    return false;
  }

  /**
   * Registering new user. Creating new item in database.
   */
  async addNewUser(email, hashPassword) {
    const newUser = new User({ email, password: hashPassword });
    await newUser.save();
    return true;
  }
}

module.exports = new UserService();
