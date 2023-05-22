const express = require('express')
const bakedGoodsRouter = express()
const {v4: uuidv4} = require('uuid')

//fake data
const bakedGoods = [
    {
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

//routes

//get all
bakedGoodsRouter.get("/",(req,res)=>{
    res.send(bakedGoods)
})

//get one parameter
bakedGoodsRouter.get("/:bakedGoodId",(req,res)=>{
    const bakedGoodId = req.params.bakedGoodId
    const foundBakedGood = bakedGoods.find(item=> item._id === bakedGoodId)
    res.send(foundBakedGood)
})

//get filter (query)

//get w/queries (filter)
bakedGoodsRouter.get("/search/name", (req,res)=>{
    const name = req.query.name 
    const filteredName = bakedGoods.filter(item => item.name === name )
    res.send(filteredName)
})

bakedGoodsRouter.get("/search/type", (req,res)=>{
    const type = req.query.type 
    const filteredType = bakedGoods.filter(item => item.type === type )
    res.send(filteredType)
})

bakedGoodsRouter.get("/search/price", (req,res)=>{
    const price = Number(req.query.price )//converts from string to number 
    const filteredPrice = bakedGoods.filter(item => item.price === price )
    res.send(filteredPrice)
})

module.exports = bakedGoodsRouter
