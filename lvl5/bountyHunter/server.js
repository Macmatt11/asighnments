//import express//
const express = require('express')
const app = express()//declare a server variable//
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config() 

//middleware for all requests//
app.use(express.json())
//morgan
app.use(morgan('dev'))


mongoose.set('strictQuery', true)//needed if not using v7
mongoose.connect(process.env.MONGO_URL, () => console.log('connected to mongodb database')) 


//routes//
app.use("/api/bounty", require("./routes/bountyRouter.js"))

//error handling -wont crash server
app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})



//server listener//
app.listen(8000,()=>{
    console.log('The server is running on port 8000')
})