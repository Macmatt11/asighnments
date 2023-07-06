const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config() 



//middleware (for every request)
app.use(express.json())
//morgan 
app.use(morgan('dev'))

//connect mongoose
mongoose.set('strictQuery', true)//needed if not using v7
mongoose.connect("mongodb+srv://carsCluster:9fz207LOh8vJfTLO@clustercar.3ctrxhm.mongodb.net/inventorydb?retryWrites=true&w=majority", ()=>console.log('connected to mongodb database'))

//routes
app.use('/api/inventory',require('./routes/inventoryRouter.js'))


//error handling
app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

//server listen 
app.listen(9000,()=>{
    console.log('The server is running on port 9000')
})