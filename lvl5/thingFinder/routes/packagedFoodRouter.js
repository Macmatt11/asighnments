const express = require("express")
const packagedFoodRouter = express()
const {v4: uuidv4} = require('uuid')


//fake data//
const packagedFood = [
    {
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    }
]

//routes
//get all inventory
packagedFoodRouter.get("/", (req,res)=>{
    res.send(packagedFood)
})

//get one (parameter)
packagedFoodRouter.get("/:packagedFoodId", (req,res)=>{
    const packagedFoodId = req.params.packagedFoodId
    const foundInventory = packagedFood.find(item => item._id === packagedFoodId)
    res.send(foundInventory)
})

//get w/queries (filter)
packagedFoodRouter.get("/search/name", (req,res)=>{
    const name = req.query.name 
    const filteredName = packagedFood.filter(item => item.name === name )
    res.send(filteredName)
})

packagedFoodRouter.get("/search/type", (req,res)=>{
    const type = req.query.type 
    const filteredType = packagedFood.filter(item => item.type === type )
    res.send(filteredType)
})

packagedFoodRouter.get("/search/price", (req,res)=>{
    const price = Number(req.query.price )//converts from string to number 
    const filteredPrice = packagedFood.filter(item => item.price === price )
    res.send(filteredPrice)
})

module.exports = packagedFoodRouter