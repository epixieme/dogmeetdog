const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },

  personality: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dog",
    },
  ],
});

module.exports = mongoose.model("User", schema);
