import mongoose from "mongoose";

const BreedSchema = new mongoose.Schema({
  breed: {
    type: String,
  },
});

module.exports = mongoose.model("Breed", BreedSchema);
