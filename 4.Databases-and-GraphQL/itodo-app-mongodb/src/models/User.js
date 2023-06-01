const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// A static model method that generates a salt, hashes the password and returns it
UserSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(7);
  return await bcrypt.hash(password, salt);
};

/**
 * method of the user object of the UserSchema,
 * which decrypts and compares the password
 * from the database with the one provided for authorization
 */
UserSchema.methods.validPasswords = async function (password) {
  const user = this;
  return await bcrypt.compare(password, user.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
