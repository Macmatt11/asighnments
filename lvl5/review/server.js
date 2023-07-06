const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')
require('dotenv').config() 


//middleware 
app.use(express.json())
//morgan 
app.use(morgan('dev'))

//connect mongoose 
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL, () => console.log('connected to mongodb database'))


//routes
app.use('/api/Games', require('./routes/gamesRouter.js'))



//error handling 
app.use((err,req,res,next)=>{
    console.log(err)//error in server terminal
    return res.send({errMsg: err.message})
})

//server listen 
app.listen(8500, ()=>{
    console.log('The Server is Running on port 8500')
})