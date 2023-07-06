const express= require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')


//routes//

//get all w/mongoDB
inventoryRouter.get('/', (req,res,next)=>{
    Inventory.find((err,items)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(items)
    })
})

//get one (params)
inventoryRouter.get('/:inventoryId',(req,res,next)=>{
    Inventory.findById({_id: req.params.inventoryId},(err,item)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//get w/ queries (filter)
inventoryRouter.get('/search/category', (req,res,next)=>{
    Inventory.find({category: req.query.category}, (err,items)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(items) 
    })
})

//post w/mongoDB
inventoryRouter.post('/', (req,res,next)=>{
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedItem)
    })
})

//delete

inventoryRouter.delete('/:inventoryId', (req,res,next)=>{
    Inventory.findOneAndDelete({_id: req.params.inventoryId},(err, deleteItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deleteItem.productName}`)
    } )
})

//put (edit) 
inventoryRouter.put('/:inventoryId',(req,res)=>{
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,
        {new:true},
        (err, updatedItem)=>{
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = inventoryRouter