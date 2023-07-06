const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

// Get All Todos including those not made by user 
todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

//get one - so only todo made by the userid
todoRouter.get('/user',(req,res,next)=>{//denotes we're getting a user specific todos
  Todo.find({user: req.auth._id}, (err,todo)=>{//only finding todo w/matchin user auth id
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todo)
  })
})

// Add new Todo
todoRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id//user that belongs to this todo is equal to the requesting users id
  const newTodo = new Todo(req.body)
  newTodo.save((err, savedTodo) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedTodo)
  })
})

// Delete Todo
todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndDelete(
    { _id: req.params.todoId, user: req.auth._id },//says 1st find by this id then make sure the user prop matches the authorized users id.item cant be deleted unless its by the person with the token or auth that matches that todo. user that made it can be the one to delete it 
    (err, deletedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully delete todo: ${deletedTodo.title}`)
    }
  )
})

// Update Todo
todoRouter.put("/:todoId", (req, res, next) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoId, user: req.auth._id  },//only the user that made this can update this 
    req.body,
    { new: true },
    (err, updatedTodo) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTodo)
    }
  )
})

module.exports = todoRouter