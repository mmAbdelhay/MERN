require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://localhost:27017/${process.env.DB_DATABASE_DEV}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
};
module.exports = { connectToDB: connectToDB };
