import mongoose from "mongoose";

const personalitySchema = new mongoose.Schema({
  personality: {
    type: String,
  },
});

module.exports = mongoose.model("Personality", personalitySchema);
