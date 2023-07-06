const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')


//middleware
app.use(express.json())
app.use(morgan('dev'))

//connect mongoDB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, ()=> console.log('Connected to DB'))

//routes
app.use('/api/auth', require('./routes/authRouter'))
// app.use('/api', jwt({secret: process.env.SECRET, algorithms: ['HS256']}))//api is endpoint that req a token. anything that starts w/api needs a token also creayes a req.user(payload)
app.use('/api/issue', require('./routes/issueRouter'))
app.use('/api/comments', require('./routes/commentsRouter'))
// app.use('/api/likes',require('./routes/likesRouter'))
// app.use('/api/dislikes',require('./routes/dislikesRouter'))



// error handling 
app.use((err,req,res,next)=>{
    console.log(err)
    if(err.name === 'UnauthorizedError'){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

//express listen
app.listen(8600,()=>{
    console.log('Server is Running on Port 8600')
})