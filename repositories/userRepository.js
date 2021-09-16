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
    const userRetrieved = await User.findOne({ email: user.email });
    return userRetrieved ? userRetrieved : false;
  } catch (err) {
    logger.error("Database Selection failed err: ", err);
    return false;
  }
};

module.exports.FindByID = async (user) => {
  try {
    const userRetrieved = await User.findOne(
      { _id: user._id },
      { _id: 1, name: 1, email: 1 }
    );
    return userRetrieved ? userRetrieved : false;
  } catch (err) {
    logger.error("Database Selection failed err: ", err);
    return false;
  }
};
