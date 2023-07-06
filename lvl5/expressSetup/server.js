//create first express server 

//import express
const express = require('express')
//declare server variable (good convention is to call it app)
const app = express() //express is given to us in a form like a function and we need to call that function. thats why () are added to express. this will return all the parts it needs to be a server. now app has every thing it needs to be a server 

//import morgan
const morgan = require('morgan')
//import mongoose
const mongoose = require('mongoose')
require('dotenv').config() 

//building a route (get,post,put and delete are used)
//two arguments;
//1. endpoint (optional) also known as mount path
//2.callback function( every route we creat will have this callback. this cb gives us the request object and the response object ) request= post,get,delete, put or anything coming from client.response is what the server sends back

//middleware (for every request)
app.use(express.json())//looks for a request body and turns it into req.body
//morgan
app.use(morgan('dev'))//console logs requests and errors to console on every request 

//connect mongoose 
mongoose.set('strictQuery', true)//needed if not using v7
mongoose.connect(process.env.MONGO_URL, () => console.log('connected to mongodb database')) 

//routes//
app.use("/api/cars", require("./routes/carsRouter.js"))

app.use("/api/trucks", require("./routes/trucksRouter.js"))






//error handling -wont crash server 
app.use((err,req,res,next)=>{//must have the err,req,res,next in order to be an err handler
console.log(err)//lets you see err in server terminal
return res.send({ errMsg: err.message}) //passes error to front end. the error will show the message of err that occured 
})

//servers listen to requests and send a response. so we need to tell the server to always be listening. this is done by adding the following to the bottom to the bottom of the server file:
//server listen//
app.listen(9000,()=>{
    console.log('The server is running on port 9000')
})// listen() needs two arguments 1. port 2. callback function (fires when the port is work. it lets us know our port is operational)