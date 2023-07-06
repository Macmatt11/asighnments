const express = require('express')
const carsRouter = express.Router()
// const {v4: uuidv4} = require('uuid')//creates id for data when handmaking databases not needed w/mongoDB
const Car = require('../models/car.js')





//routes//

//get all with mongoDB
carsRouter.get('/', (req,res,next)=>{
    Car.find((err,cars)=>{
    if(err){//must handle errors first in mongoDb
        res.status(500)
        return next(err)
    }
    return res.status(200).send(cars)
    })
})

//get one (params)
carsRouter.get('/:carId',(req,res,next)=>{
    Car.findById({_id: req.params.carId},(err,item)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(item)
    })
})

//get by make (queries) for this ex we are building into a bigger endpoint but this can be built into basic get route "/" //
carsRouter.get("/search/make", (req,res, next)=>{
Car.find({make: req.query.make},(err,cars)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(cars)
})
})



    //post w/mongoDB
carsRouter.post('/',(req,res,next)=>{
    const newCar = new Car(req.body)
    newCar.save((err,savedCar)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedCar)

    })
})


//delete//
carsRouter.delete("/:carId",(req,res)=>{
Car.findOneAndDelete({_id: req.params.carId},(err,deletedItem)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(`Successfully deleted item ${deletedItem.make} ${deletedItem.model} from database`)
})
})

//put (edit) update one//
carsRouter.put("/:carId",(req,res)=>{
Car.findOneAndUpdate(
    {_id: req.params.carId},//find this one to update
    req.body,//update the object w/this data
    {new: true},//sends back the updated version 
    (err, updatedCar)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedCar)
    }

)
})


    module.exports = carsRouter


       //another way to perform a get and response in a router

    // carsRouter.route("/")
    // .get((req,res)=>{ 
    //     res.send(cars)
    // })
    // .post((req,res)=>{
    //     const newVehicle = req.body
    //     newVehicle._id = uuidv4() 
    //     cars.push(newVehicle)
    //     res.send(`successfully added ${newVehicle.make} to the database!`)
    //     // console.log(req)
    //     })