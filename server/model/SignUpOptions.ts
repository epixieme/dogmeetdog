import mongoose from "mongoose"

const SignUpOptionsSchema = new mongoose.Schema({

  breed: {
    type: String,
   
  
  },
  age: {
    type: Number,
 
  },

  personality: {
    type: String,

   
  }
})

module.exports = mongoose.model('SignUpOptions', SignUpOptionsSchema)