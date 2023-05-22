//import express//
const express = require('express')

//declare a server variable//
const app = express()

//middleware for all requests//
app.use(express.json())

//routes//
app.use("/api/bounty", require("./routes/bountyRouter.js"))




//server listener//
app.listen(9000,()=>{
    console.log('The server is running on port 9000')
})