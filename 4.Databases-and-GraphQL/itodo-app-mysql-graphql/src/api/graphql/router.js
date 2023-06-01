const express = require("express");
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphqlSchema");
const resolvers = require("./resolvers");
const passport = require("passport");

router.use(
  "/graphql",
  passport.authenticate("jwt", { session: false }),
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    customFormatErrorFn: (error) => {
      const statusCode = 500;
      const message = error.message;
      return { statusCode, message };
    },
  })
);

module.exports = router;
