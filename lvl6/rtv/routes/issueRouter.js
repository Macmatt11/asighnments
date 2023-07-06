const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')
const {expressjwt: jwt} = require('express-jwt')
require('dotenv').config()


// Get All posts including those not made by user 
issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(issues)
    })
})

// Get only issues by user id
issueRouter.get('/user',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{//denotes we're getting a user specific issue
    Issue.find({user: req.auth._id}, (err,issue)=>{//only finding issue w/matchin user auth id
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(issue)
    })
})


//add a new issue (post)
issueRouter.post('/',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err,savedIssue)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

//edit/update issue post 
issueRouter.put('/:issueId', jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
    Issue.findOneAndUpdate({_id: req.params.issueId, user: req.auth._id},////only the user that made this can update this 
    req.body,
    {new: true},
    (err,updatedIssue)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(updatedIssue)
    })
})

//delete issue
issueRouter.delete('/:issueId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
    Issue.findOneAndDelete({_id: req.params.issueId, user: req.auth._id}, //find post by this id and delete by the user who made the post 
        (err,deletedIssue)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted post: ${deletedIssue}`)
    })
})

//likes post 
issueRouter.put('/upVote/:issueId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}), (req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $addToSet: { likes: req.auth._id },
        $pull : {dislikes: req.auth._id}},
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})

//dislikes post 
issueRouter.put('/downVote/:issueId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req, res, next) => {
    Issue.findOneAndUpdate(
        {_id: req.params.issueId},
        { $addToSet: { dislikes: req.auth._id },
        $pull : {likes: req.auth._id}},
        {new: true},
        (err, updatedPost) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedPost)
        }
    )
})


module.exports = issueRouter