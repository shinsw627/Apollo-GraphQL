const User = require("../../models/users.model");

async function findAllUsers() {
  return await User.find();
}

async function existsCheckByEmail(email) {
  const result = await User.exists({ email });
  return result;
}

async function createUser(userInfo) {
  return await User.create(userInfo);
}

async function findUserByEmail(email) {
  const result = await User.findOne({ email });
  return result;
}

module.exports = {
  findAllUsers,
  existsCheckByEmail,
  createUser,
  findUserByEmail,
};
