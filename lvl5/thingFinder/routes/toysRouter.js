const express = require("express")
const toysRouter = express()
const {v4: uuidv4} = require('uuid')


//fake data//
const toys = [
    {
        name: "basketball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    }
]

//routes
//get all inventory
toysRouter.get("/", (req,res)=>{
    res.send(toys)
})

//get one (parameter)
toysRouter.get("/:toyId", (req,res)=>{
    const toyId = req.params.toyId
    const foundInventory = toys.find(item => item._id === toyId)
    res.send(foundInventory)
})

//get w/queries (filter)
toysRouter.get("/search/name", (req,res)=>{
    const name = req.query.name 
    const filteredName = toys.filter(item => item.name === name )
    res.send(filteredName)
})

toysRouter.get("/search/type", (req,res)=>{
    const type = req.query.type 
    const filteredType = toys.filter(item => item.type === type )
    res.send(filteredType)
})

toysRouter.get("/search/price", (req,res)=>{
    const price = Number(req.query.price )//converts from string to number 
    const filteredPrice = toys.filter(item => item.price === price )
    res.send(filteredPrice)
})

module.exports = toysRouter