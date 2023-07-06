// const express = require('express')
// const likesRouter = express.Router()
// const Like = require('../models/like')
// const {expressjwt: jwt} = require('express-jwt')


// // Get All posts including those not made by user 
// likesRouter.get("/", (req, res, next) => {
//     Like.find((err, likes) => {
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     return res.status(200).send(likes)
//     })
// })


// // get one - so only get posts made by the userid
// likesRouter.get('/like',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{//denotes we're getting a user specific issue
//     Like.find({user: req.auth._id}, (err,like)=>{//only finding like w/matchin user auth id
//     if(err){
//         res.status(500)
//         return next(err)
//     }
//     return res.status(200).send(like)
//     })
// })


// //add a new like to feed (post)  //jwt meant that user must be logged in to perform task 
// likesRouter.post('/',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
//     req.body.user = req.auth._id
//     const newlike = new Like(req.body)
//     newlike.save((err,savedLike)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(201).send(savedLike)
//     })
// })

// //edit/update new like  //jwt meant that user must be logged in to perform task 
// likesRouter.put('/:likeId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}), (req,res,next)=>{
//     Like.findOneAndUpdate({_id: req.params.likeId, user: req.auth._id},////only the user that made this can update this 
//     req.body,
//     {new: true},
//     (err,updatedLike)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         res.status(201).send(updatedLike)
//     })
// })

// //delete like //jwt meant that user must be logged in to perform task 
// likesRouter.delete('/:likeId',jwt({secret: process.env.SECRET, algorithms: ['HS256']}),(req,res,next)=>{
//     Like.findOneAndDelete({_id: req.params.likeId, user: req.auth._id}, //find post by this id and delete by the user who made the post 
//         (err,deletedLike)=>{
//         if(err){
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`successfully deleted post: ${deletedLike.title}`)
//     })
// })



// module.exports = likesRouter