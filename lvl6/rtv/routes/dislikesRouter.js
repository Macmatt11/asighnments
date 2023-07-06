// const express = require('express')
// const dislikesRouter = express.Router()
// const Dislike = require('../models/dislike')
// const {expressjwt: jwt} = require('express-jwt')


// // Get All posts including those not made by user 
// dislikesRouter.get("/", (req, res, next) => {
//     Dislike.find((err, dislikes) => {
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     return res.status(200).send(dislikes)
//     })
// })

// // get one - so only get posts made by the userid
// dislikesRouter.get('/dislike',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{//denotes we're getting a user specific issue
//     Dislike.find({user: req.auth._id}, (err,dislike)=>{//only finding dislike w/matchin user auth id
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     return res.status(200).send(dislike)
//     })
// })


// //add a new dislike to feed (post)  //jwt meant that user must be logged in to perform task 
// dislikesRouter.post('/',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
//     req.body.user = req.auth._id
//     const newDislike = new Dislike(req.body)
//     newDislike.save((err,savedDislike)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedDislike)
//     })
// })

// //edit/update new dislike  //jwt meant that user must be logged in to perform task 
// dislikesRouter.put('/:dislikeId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}), (req,res,next)=>{
//     Dislike.findOneAndUpdate({_id: req.params.dislikeId, user: req.auth._id},////only the user that made this can update this 
//     req.body,
//     {new: true},
//     (err,updatedDislike)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         res.status(201).send(updatedDislike)
//     })
// })

// //delete dislike //jwt meant that user must be logged in to perform task 
// dislikesRouter.delete('/:dislikeId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
//     Dislike.findOneAndDelete({_id: req.params.dislikeId, user: req.auth._id}, //find post by this id and delete by the user who made the post 
//         (err,deletedDislike)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`successfully deleted post: ${deletedDislike.title}`)
//     })
// })



// module.exports = dislikesRouter