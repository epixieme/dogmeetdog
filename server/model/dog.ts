import mongoose from "mongoose"

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
    minlength: 1
  },
  breed: {
    type: String,
    required:true,
  
  },
  age: {
    type: String,
    required:true,
  },

  personality: {
    type: String,
    required:true,
   
  }
})

module.exports = mongoose.model('Dog', DogSchema)