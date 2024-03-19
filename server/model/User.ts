const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 3,
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

// schema.methods.comparePassword = async function (candidatePassword: any) {
//   try {
//     // Use bcrypt to compare provided password with hashed password
//     return await bcrypt.compare(candidatePassword, this.password);
//   } catch (error) {
//     // Handle error, e.g., log or throw
//     console.error("Error comparing passwords:", error);
//     throw error;
//   }
// };

module.exports = mongoose.model("User", schema);
