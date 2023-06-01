const LocalStrategy = require("passport-local").Strategy;
const UserSchema = require("../../models/User");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const validate = await validPasswords(email, password);
      if (!validate) {
        return done(null, false, { message: "Wrong Password" });
      }
      return done(null, user, { message: "Logged in Successfully" });
    } catch (err) {
      return done(err);
    }
  }
);
