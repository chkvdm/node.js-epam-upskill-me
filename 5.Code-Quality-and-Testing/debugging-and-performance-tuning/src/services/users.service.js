const bcrypt = require("bcrypt");

class UsersService {
  constructor() {
    this.users = [];
  }

  async registerUser(user) {
    if (await this.findUserByEmail(user.email)) {
      throw new Error("User already exists!");
    }

    user.password = await bcrypt.hash(user.password, 10);

    this.users.push(user);
  }

  async findUserByEmail(email) {
    return this.users.find(
      ({ email: currentUserEmail }) => email === currentUserEmail
    );
  }
}

module.exports = UsersService;
