const express = require("express")
const fruitRouter = express()
const {v4: uuidv4} = require('uuid')


//fake data//
const fruit = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },
    {
        name: "watermelon",
        type: "food",
        price: 300,
        _id: uuidv4()
    },
    {
        name: "strawberry",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

//routes
//get all inventory
fruitRouter.get("/", (req,res)=>{
    res.send(fruit)
})

//get one (parameter)
fruitRouter.get("/:fruitId", (req,res)=>{
    const fruitId = req.params.fruitId
    const foundInventory = fruit.find(item => item._id === fruitId)
    res.send(foundInventory)
})

//get w/queries (filter)
fruitRouter.get("/search/name", (req,res)=>{
    const name = req.query.name 
    const filteredName = fruit.filter(item => item.name === name )
    res.send(filteredName)
})

fruitRouter.get("/search/type", (req,res)=>{
    const type = req.query.type 
    const filteredType = fruit.filter(item => item.type === type )
    res.send(filteredType)
})

fruitRouter.get("/search/price", (req,res)=>{
    const price = Number(req.query.price )//converts from string to number 
    const filteredPrice = fruit.filter(item => item.price === price )
    res.send(filteredPrice)
})

module.exports = fruitRouter