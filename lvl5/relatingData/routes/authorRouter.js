const express = require('express')
const authorRouter = express.Router()
const Author = require('../models/author')

//get all authors 
authorRouter.get('/', (req,res,next)=>{
    Author.find((err,authors)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    })
})

//get authors by search term 
authorRouter.get('/search', (req,res,next)=>{
    const {author} = req.query//grabbing author property 
    const pattern = new RegExp(author)//need to turn author into a regex to use below 
    Author.find({ name: { $regex: pattern, $options: 'i' } },//this i looking for an author that matches anything in the provided string.
    //"i" means case sensitivity doesnt matter
    (err,authors)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(authors)
    }) 
})


//add author (post)
authorRouter.post('/',(req,res,next)=>{
    const newAuthor = new Author(req.body)
    newAuthor.save((err,savedAuthor)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedAuthor)
    })
})

module.exports = authorRouter