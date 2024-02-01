const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  breed: {
    type: String,
    required: true,
    minlength: 5
  },
  age: {
    type: String,
    minlength: 5
  },

  personality: {
    type: String,
    required: true,
    minlength: 3
  },
  address: {
    type: String,
    required: true,
    minlength: 3
  },
})

module.exports = mongoose.model('Dog', DogSchema)