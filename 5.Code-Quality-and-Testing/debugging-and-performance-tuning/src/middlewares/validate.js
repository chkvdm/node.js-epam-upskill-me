const { validationResult } = require("express-validator");

/**
 * @desc Performs check of validation result will reject the request with 400 (Bad Request) if the validation result
 * contains an error, otherwise calls next.
 * @param req
 * @param res
 * @param next
 */
module.exports = function validate(req, res, next) {
  const { errors } = validationResult(req);

  if (errors.length > 0) {
    return res.status(400).json({
      errors
    });
  }

  return next();
}
