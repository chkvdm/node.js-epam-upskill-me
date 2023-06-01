const LocalStrategy = require("passport-local").Strategy;
const UserSchema = require("../../models/User");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async (email, password, done) => {
    try {
      const user = await UserSchema.findOne({ email });
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const validate = await user.validPasswords(password);
      if (!validate) {
        return done(null, false, { message: "Wrong Password" });
      }
      return done(null, user, { message: "Logged in Successfully" });
    } catch (err) {
      return done(err);
    }
  }
);
