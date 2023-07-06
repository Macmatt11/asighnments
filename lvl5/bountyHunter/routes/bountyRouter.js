const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


//route//

//get all
bountyRouter.get( "/",(req,res,next)=>{ //responding with data 
    Bounty.find((err,bounties)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

//get one (parameter)
bountyRouter.get("/:bountyId",(req,res,next)=>{
    Bounty.findById({_id: req.params.bountyId}, (err,bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

//get w/queries filter 

bountyRouter.get("/search/living", (req,res,next)=> {
    Bounty.find({living: req.query.living},(err,bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

bountyRouter.get("/search/type", (req,res,next)=> {
    Bounty.find({type: req.query.type},(err,bounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})


//post w/mongoDB
bountyRouter.post("/",(req,res,next)=>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err,savedBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

//delete
bountyRouter.delete("/:bountyId", (req,res,next)=>{
    Bounty.findOneAndDelete({_id: req.params.bountyId},(err,deletedBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted ${deletedBounty.firstName} ${deletedBounty.lastName}`)
    })
})

//put(edit)
bountyRouter.put("/:bountyId", (req,res,next)=>{
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId},
        req.body,
        {new:true},
        (err,updatedBounty)=>{
            if(err){
                res.status(500)
                return nexy(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})


module.exports = bountyRouter





// //- First Name
// - Last Name
// - Living (Boolean)
// - Bounty Amount (number)
// - Type (‘Sith’ or ‘Jedi’)
// - ID (a unique identifier.

// Jedi:

// Luke Skywalker
// Obi-Wan Kenobi
// Yoda
// Mace Windu
// Qui-Gon Jinn
// Rey
// Anakin Skywalker/Darth Vader (formerly a Jedi)
// Ahsoka Tano (formerly a Jedi)
// Sith:

// Darth Sidious/Emperor Palpatine
// Darth Vader/Anakin Skywalker (formerly a Sith)
// Darth Maul
// Count Dooku/Darth Tyranus
// Kylo Ren/Ben Solo (formerly a Sith)
// Asajj Ventress (formerly a Sith)