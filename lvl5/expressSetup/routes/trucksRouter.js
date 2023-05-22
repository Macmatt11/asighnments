const express = require('express')
const trucksRouter = express.Router()
const {v4: uuidv4} = require('uuid')

//fake data//

const trucks = [
    {
    make: "chevrolet",
    model: "silverado",
    _id:uuidv4() 
    },
    {
    make: "ford",
    model: "f150",
    _id:uuidv4() 
    },
    {
    make: "dodge",
    model: "ram",
    _id:uuidv4() 
    },
    {
    make: "toyota",
    model: "tundra",
    _id:uuidv4() 
    }
]

//routes//
//crud w/express and fake data 

//get all//
trucksRouter.get("/",(req,res)=>{
    res.send(trucks)
    })

//get one (parameters)//
trucksRouter.get("/:truckId",(req,res)=>{
    const truckId = req.params.truckId
    const foundTruck = trucks.find(truck=> truck._id === truckId)
    res.send(foundTruck)
})

//get w/queries (filter)
trucksRouter.get("/search/make", (req,res)=>{
    const make = req.query.make
    const filteredTruck = trucks.filter(truck=> truck.make === make)
    res.send(filteredTruck)
})

//post
trucksRouter.post("/",(req,res)=>{
    const newVehicle = req.body
    newVehicle._id = uuidv4() 
    trucks.push(newVehicle)
    res.send(`successfully added ${newVehicle.make} to the database!`)
    // console.log(req)
    } )

//delete//
trucksRouter.delete("/:truckId",(req,res)=>{
    const truckId = req.params.truckId
    const truckIndex = trucks.findIndex(truck=> truck._id === truckId)
    trucks.splice(truckIndex,1)
    res.send("successfully deleted vehicle!")
})

//put (edit)//
trucksRouter.put("/:truckId",(req,res)=>{
    const truckId = req.params.truckId//extracts the value of the "truckId" parameter from the request URL using the "req.params" object.
    const updatedObject = req.body //t extracts the updated object from the request body using the "req.body" object
    const truckIndex = trucks.findIndex(truck => truck._id === truckId) //finds the index of the truck with the given "truckId" in the "trucks" array using the "Array.findIndex()" method.
    const updatedTruck = Object.assign(trucks[truckIndex], updatedObject) //updates the truck object at the index found in step 3 with the updated object using the "Object.assign()" method.
    res.send(updatedTruck)
})

    module.exports = trucksRouter