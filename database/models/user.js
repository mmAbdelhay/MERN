const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
});

const User = mongoose.model("Users", schema);

module.exports = User;
