const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")


//fake data//
const bounties = [
    {
        firstName: "Mace",
        lastName: "Windu",
        living: false,
        bounty: 3000,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Darth ",
        lastName: "Sidious",
        living: false,
        bounty: 93000,
        type: "sith",
        _id: uuidv4()
    },
    {
        firstName: "Darth",
        lastName: "Tyranus",
        living: false,
        bounty: 33000,
        type: "sith",
        _id: uuidv4()
    }
]


//route//

//get all
bountyRouter.get( "/",(req,res)=>{ //responding with data 
    res.send(bounties)
})

//get one (parameter)
bountyRouter.get("/:bountyId",(req,res)=>{
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

//get w/queries filter 
bountyRouter.get("/search/firstName", (req,res)=> {
    const firstName = req.query.firstName
    const filteredBounty = bounties.filter(bounty => bounty.firstName === firstName)
    res.send(filteredBounty)
})

//post 
bountyRouter.post("/",(req,res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)//<---changed to newBounty so that it can be saved into state and appear onto the dom
})

//delete
bountyRouter.delete("/:bountyId", (req,res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex,1)
    res.send("successfully deleted bounty")
})

//put(edit)
bountyRouter.put("/:bountyId", (req,res)=>{
    const bountyId = req.params.bountyId
    const updatedObj = req.body 
    const bountyIndex = bounties.findIndex(bounty=> bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updatedObj)
    res.send(updatedBounty)
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