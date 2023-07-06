const express = require('express')
const commentsRouter = express.Router()
const Issue = require('../models/issue')
const Comment = require('../models/comments')
const {expressjwt: jwt} = require('express-jwt')


// Get All comments including those not made by user 
commentsRouter.get("/", (req, res, next) => {
    Comment.find((err, comments) => {
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(comments)
    })
    .populate('user')
})

// get one - so only get posts made by the userid
commentsRouter.get('/comment',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{//denotes we're getting a user specific issue
    Comment.find({user: req.auth._id}, (err,comment)=>{//only finding comment w/matchin user auth id
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(comment)
    })
})


// get one - so only get posts made by the userid
commentsRouter.get('/:userId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{//denotes we're getting a user specific issue
    Comment.find({user: req.params.userId}, (err,comment)=>{//only finding comment w/matchin user auth id
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(comment)
    })
})

commentsRouter.get('/:issueId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
    console.log('req',req.params)
    Comment.find({issue:req.params.issueId}, (err,comment)=>{
        
        if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(comment)
    })
    
})



//add a new comment to feed (post)  //jwt meant that user must be logged in to perform task 
commentsRouter.post('/:issueId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId
    const newComment = new Comment(req.body)
    newComment.save((err,savedComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

//edit/update new comment  //jwt meant that user must be logged in to perform task 
commentsRouter.put('/:commentId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}), (req,res,next)=>{
    Comment.findOneAndUpdate({_id: req.params.commentId, user: req.auth._id},////only the user that made this can update this 
    req.body,
    {new: true},
    (err,updatedComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.status(201).send(updatedComment)
    })
})

//delete comment //jwt meant that user must be logged in to perform task 
commentsRouter.delete('/:commentId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
    Comment.findOneAndDelete({_id: req.params.commentId, user: req.auth._id}, //find post by this id and delete by the user who made the post 
        (err,deletedComment)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted post`)
    })
})



module.exports = commentsRouter