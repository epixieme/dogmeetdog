const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
  // required:true
    // minlength: 5
  },
  breed: {
    type: String,
   
  
  },
  age: {
    type: String,
 
  },

  personality: {
    type: String,

   
  }
})

module.exports = mongoose.model('Dog', DogSchema)