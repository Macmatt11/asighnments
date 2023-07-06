const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

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
            const token = jwt.sign(savedUser.toObject(),process.env.SECRET)
            return res.status(201).send({token, user: savedUser})
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
        if(req.body.password !== user.password){//if not the right p/w
            res.status(403)
            return next(new Error("Username or Password incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({token,user})
    })
})


module.exports = authRouter