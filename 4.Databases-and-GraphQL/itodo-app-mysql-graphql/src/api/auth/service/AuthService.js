const bcrypt = require("bcrypt");
const User = require("../../../models/User");

// method that generates a salt, hashes the password and returns it
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(7);
  return await bcrypt.hash(password, salt);
}

/**
 * method, which decrypts and compares the password
 * from the database with the one provided for authorization
 */
async function validPasswords(email, password) {
  const user = await User.findOne({ where: { email: email } });
  return await bcrypt.compare(password, user.password);
}

module.exports = { hashPassword, validPasswords };
