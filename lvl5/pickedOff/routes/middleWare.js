const express = require("express")
const middleWare = express()


//middleware function

middleWare.use("/",(req,res,next)=>{
    req.body = {
        firstName: "bruce",
        lastName: "wayne",
    }
    next()
})


module.exports = middleWare