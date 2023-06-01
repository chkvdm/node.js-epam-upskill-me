const JWTstrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { secretKey } = require("../../../config");

module.exports = new JWTstrategy(
  {
    secretOrKey: secretKey,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  },
  async (token, done) => {
    try {
      return done(null, token.email);
    } catch (err) {
      done(err);
    }
  }
);
