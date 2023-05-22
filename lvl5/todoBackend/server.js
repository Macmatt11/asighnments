const express = require('express')
const app = express()


//middleware 
app.use(express.json())


//routes
app.use('/todos',require('./routes/todoRouter.js'))

//app listener 
app.listen(9000,()=>{
    console.log("The server running on port 9000")
})