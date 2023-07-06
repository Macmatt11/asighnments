const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        lowercase: true, //makes lowercase
        unique: true //doesnt allow duplicated usernames 
    },
    password:{
        type:String,
        required: true
    },
    memberSince:{
        type: Date,
        default: Date.now //uses the date user is created 
    },
    isAdmin:{
        type: Boolean,
        default: false
    }

}) 

module.exports = mongoose.model('User', userSchema)