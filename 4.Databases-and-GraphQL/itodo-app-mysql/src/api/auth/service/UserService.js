const User = require("../../../models/User");

/**
 * Сhecking if such an email exists in the database
 */
class UserService {
  async checkUniqEmail(email) {
    const data = await User.findOne({ where: { email: email } });
    if (!data) {
      return true;
    }
    return false;
  }

  /**
   * Registering new user. Creating new item in database.
   */
  async addNewUser(email, hashPassword) {
    await User.create({
      email: email,
      password: hashPassword,
    });
    return true;
  }
}

module.exports = new UserService();
