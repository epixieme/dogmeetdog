
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const MONGODB_URI:string = process.env.MONGODB_URI

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error:any) => {
    console.log('error connection to MongoDB:', error.message)
  })