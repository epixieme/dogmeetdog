import mongoose from "mongoose";

const AgeSchema = new mongoose.Schema({
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("Age", AgeSchema);
