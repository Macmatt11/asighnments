const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    required: true
  },
  user:{//this is referencing this todo to the user it belongs to. one to many relation so one user to many todo items. 
    type: Schema.Types.ObjectId, //this is an id from another obj in data base 
    ref:"User", //referencing which collection id is from in ex this is from User model
    required: true//no todo in data base without a user 
  }
})

module.exports = mongoose.model("Todo", todoSchema)