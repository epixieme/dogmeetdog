
// import mongoose from "mongoose";
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

const MONGODB_URI:any = process.env.MONGODB_URI

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error:any) => {
    console.log('error connection to MongoDB:', error.message)
  })