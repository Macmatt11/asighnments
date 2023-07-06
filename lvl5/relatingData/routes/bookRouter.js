const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/books')

//get all Books 
bookRouter.get('/', (req,res,next)=>{
    Book.find((err,books)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//get books by author 
bookRouter.get('/:authorId', (req,res,next)=>{
    Book.find({author: req.params.authorId}, (err,books)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

//add Book (post)
bookRouter.post('/:authorId',(req,res,next)=>{//to add authors id to their books add /:authorId to post path 
    req.body.author = req.params.authorId//sets the books author prop = to the authors id 
    const newBook = new Book(req.body)
    newBook.save((err,savedBook)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

//like a book
bookRouter.put('/like/:bookId', (req,res,next)=>{
    Book.findOneAndUpdate(
        {_id:req.params.bookId},//find book w/this id 
        {$inc:{likes: 1}},//here mongDB will perform an action on the obj w/this id(above). syntax is the action ex $inc followed by an object w/what we want to inc. here its the likes by 1 
        {new: true},//send back the new one 
        (err,updatedBook)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

//find books by like range 
bookRouter.get('/search/bylikes',(req,res,next)=>{
    Book.where('likes').gte(2).exec((err,books)=>{//this is saying to get the books where the likes are greater than or equal to 2. exec lets us know that there are no more methods we want to run sorta like return for functions
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

module.exports = bookRouter