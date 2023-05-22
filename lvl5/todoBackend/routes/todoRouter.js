const express = require('express')
const todoRouter = express()
const {v4: uuidv4} = require('uuid')


//fake data 

const todos = [
    {
        name: "workout",
        description: "complete todays workout",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfYNM4WsObSaacw5pvUIVq5221CdF-sbQSg&usqp=CAU",
        completed: true,
        _id: uuidv4()
    },
    {
        name: 'breakfast',
        description: 'cook breakfast',
        imageUrl: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-09-breakfast-grits%2FNew%20Finals%2F2021-10-12_ATK8035',
        completed: true,
        _id : uuidv4()
    },
    {
        name: 'get dressed',
        description:'getting ready for the day',
        imageUrl:'https://media.istockphoto.com/id/1202496156/vector/funny-boy-dress-up-clothes-in-home-wardrobe-room.jpg?s=612x612&w=0&k=20&c=vEV6WC64ncI-UVuQk_D5iZcL68UsviFcpP0YuItU82w=',
        completed: true,
        _id: uuidv4()
    },
    {
        name: 'classwork tasks',
        description: 'complete all story points scheduled for today',
        imageUrl: 'https://www.vhv.rs/dpng/d/421-4212387_thumb-image-lots-of-homework-clipart-hd-png.png',
        completed: false,
        _id: uuidv4()
    }
]

//routes

//get all
todoRouter.get('/', (req,res)=>{
    res.send(todos)
})

//get one (parameters)
todoRouter.get('/:todoId',(req,res)=>{
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo=> todo._id === todoId)
    res.send(foundTodo)
})

//get w/quiery filters
todoRouter.get('/search/name',(req,res)=>{
    const name = req.query.name 
    const filteredName = todos.filter(todo=> todo.name === name)
    res.send(filteredName)
})

todoRouter.get('/search/description', (req,res)=>{
    const description = req.query.description
    const filteredDescription = todos.filter(todo=> todo.description === description)
    res.send(filteredDescription)
})

todoRouter.get('/search/completed', (req, res) => {
    const completed = req.query.completed;
    let filteredCompleted;//By declaring filteredCompleted without initializing it, we're creating an empty variable that can be assigned a value later on based on the logic of the code.
    if (completed === 'true') {
    filteredCompleted = todos.filter(todo => todo.completed === true);
    } else if (completed === 'false') {
    filteredCompleted = todos.filter(todo => todo.completed === false);
    }
    res.send(filteredCompleted);
});

//post 
todoRouter.post('/',(req,res)=>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`successfully added ${newTodo.name} to the database`)
})

//delete
todoRouter.delete('/:todoId', (req,res)=>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex,1)
    res.send('successfully deleted todo item')
})

//put 
todoRouter.put('/:todoId',(req,res)=>{
    const todoId =req.params.todoId
    const updatedObj = req.body
    const todoIndex = todos.findIndex(todo=> todo._id === todoId )
    const updatedTodo = Object.assign(
        todos[todoIndex], updatedObj
    )
    res.send(updatedTodo)
})



module.exports = todoRouter