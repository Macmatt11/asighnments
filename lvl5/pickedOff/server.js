const express = require("express")
const app = express()


//middleware 
app.use(express())

//routes 
app.use("/middleWare", require("./routes/middleWare.js")) //imports middleware 

app.get("/middleWare",(req,res)=>{
    res.send(req.body)
})





app.listen(9000,()=>{
    console.log('The server is running on port 9000')
})