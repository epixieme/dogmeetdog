const mongoose = require('mongoose')

const schema = new mongoose.Schema({
 email: {
    type: String,
    required: true,
    minlength: 3
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dog'
    }
  ],
})

module.exports = mongoose.model('User', schema)