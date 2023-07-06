const express = require('express')
const authRouter = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')

//signup route (post)
authRouter.post("/signup", (req,res,next)=>{
    User.findOne({username: req.body.username.toLowerCase()}, (err,user)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){//if user exists already
            res.status(403)
            return next(new Error('Username Already Used'))
        }
        const newUser = new User(req.body)
        newUser.save((err,savedUser)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            //payload and secret
            const token = jwt.sign(savedUser.withoutPassword(),process.env.SECRET)
            return res.status(201).send({token, user: savedUser.withoutPassword()})
        })
    })
})

//login route (post) if member already
authRouter.post('/login', (req,res,next)=>{
    User.findOne({username: req.body.username.toLowerCase()},(err,user)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){//if not the right user 
            res.status(403)
            return next(new Error("Username or Password incorrect"))
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