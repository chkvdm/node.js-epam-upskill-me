const passport = require("passport");
const LocalStrategy = require("passport-local");
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");

module.exports = function setupPassport({ usersService }) {
  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: "asdfsfwefasdfwefwefsdf",
      },
      async function (jwtPayload, done) {
        try {
          const user = await usersService.findUserByEmail(jwtPayload.email);

          if (!user) {
            return done(null, null);
          }

          const { password, ...data } = user;
          return done(null, data);
        } catch (e) {
          done(e);
        }
      }
    )
  );

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async function (email, password, done) {
        try {
          const user = await usersService.findUserByEmail(email);

          if (!user) {
            return done(null, false, {
              message: "User with provided email not found!",
            });
          }

          const doesPasswordsMatch = await bcrypt.compare(
            password,
            user.password
          );

          if (!doesPasswordsMatch) {
            return done(null, false, {
              message: "Invalid password!",
            });
          }

          const { password: userPassword, ...userData } = user;

          return done(null, userData, {
            message: "User logged in successfully!",
          });
        } catch (e) {
          return done(e);
        }
      }
    )
  );
};
