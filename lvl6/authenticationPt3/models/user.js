const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  memberSince: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

//pre saved hook to encrpt user passwords on signup
//fires thes lines of codes first before saved 
userSchema.pre('save',function(next){//must use this function syntax to have access to the "this" key word. this function passes us the next middleware
const user = this
if(!user.isModified('password'))return next()//used for first time signup. incase this happens on different save itll go to next thing. on signup we need to encrypt
bcrypt.hash(user.password, 10, (err,hash)=>{//bcrypt.hash encrypts. the 1st argument is what we are hashing in ex its the password, 2nd is a salt round how the pw is hashed, then there will be an err or hash pw
if(err) return next(err)//if err pass to err handling middleware
user.password = hash//no err then we do this line, overwrite the user.password to be the hash version of it 
next()//move to next middleware 
})
}) //parmeters are tpye of hook and a function

//method to check encrypted pw on login
userSchema.methods.checkPassword = function(passwordAttempt, callback){//the method used is checkPassword which will = a function w/ passwordattempt(req.body.password), and callback funct so string & function are passed.
  bcrypt.compare(passwordAttempt, this.password,(err, isMatch)=>{//use a method from bcrypt called compare which compares hash pw w/ plain text pw to see if same. pw attempt and encrypted pw (this.password) are passed into compare method. this will return either an err or boolean. 
    if(err) return callback(err)//if theres an err(truthy value in the 1st argument) call the callback func passed in
    return callback(null, isMatch)//if no err(null = falsy value in 1st argument) and a boolean(truthy value ) in the 2nd meaning it was a match
  })
}

//method to remove users pw for token & sending res to frontend
userSchema.methods.withoutPassword = function(){//not expecting parameters 
const user = this.toObject()//pull user out. toObject changes data to a plain js object 
delete user.password//now that its a pure object we are going to delete a key from it. so delete users pw
return user //returns user w/out pw for security reasons 
}





module.exports = mongoose.model("User", userSchema)