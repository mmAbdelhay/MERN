const hash = require("../services/hash");
const logger = require("../services/logger");
const User = require("../database/models/user");

module.exports.InsertUser = async (user) => {
  try {
    const newUser = new User({
      name: user.name,
      email: user.email,
      password: await hash.hashPassword(user.password),
    });
    newUser.save();
    return true;
  } catch (err) {
    logger.error("Database Insertion failed err: ", err);
    console.log(err);
    return false;
  }
};

module.exports.FindByEmail = async (user) => {
  try {
    const User_retrieved = await User.findOne({ email: user.email });
    return User_retrieved ? User_retrieved : false;
  } catch (err) {
    logger.error("Database Selection failed err: ", err);
    return false;
  }
};
