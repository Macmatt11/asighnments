const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

// Signup
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(user){
      res.status(403)
      return next(new Error("That username is already taken"))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
                            // payload,            // secret
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
      return res.status(201).send({ token, user: savedUser.withoutPassword() })
    })
  })
})

// Login
authRouter.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(!user){//checks if user exists then checks the pw
      res.status(403)
      return next(new Error("Username or Password are incorrect"))
    }
    user.checkPassword(req.body.password,(err,isMatch)=>{//takes a password attempt (plain pw) and callback function. send data to checkpassword method in user schema then does below 
      if(err){//if err this occurs 
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }
      if(!isMatch){//if pw isnt a match this occurs
        res.status(403)
        return next(new Error("Username or Password are incorrect"))
      }//if no err then the following occurs
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
    return res.status(200).send({ token, user: user.withoutPassword()})
    })
  })
})


module.exports = authRouter