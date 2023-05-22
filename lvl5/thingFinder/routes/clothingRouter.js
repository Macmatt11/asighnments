const express = require("express")
const clothingRouter = express()
const {v4: uuidv4} = require('uuid')


//fake data//
const clothing = [
    {
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    }
    
]

//routes
//get all inventory
clothingRouter.get("/", (req,res)=>{
    res.send(clothing)
})

//get one (parameter)
clothingRouter.get("/:clothingId", (req,res)=>{
    const clothingId = req.params.clothingId
    const foundInventory = clothing.find(item => item._id === clothingId)
    res.send(foundInventory)
})

//get w/queries (filter)
clothingRouter.get("/search/name", (req,res)=>{
    const name = req.query.name 
    const filteredName = clothing.filter(item => item.name === name )
    res.send(filteredName)
})

clothingRouter.get("/search/type", (req,res)=>{
    const type = req.query.type 
    const filteredType = clothing.filter(item => item.type === type )
    res.send(filteredType)
})

clothingRouter.get("/search/price", (req,res)=>{
    const price = Number(req.query.price )//converts from string to number 
    const filteredPrice = clothing.filter(item => item.price === price )
    res.send(filteredPrice)
})

module.exports = clothingRouter