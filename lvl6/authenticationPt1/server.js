const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt: jwt } = require("express-jwt");

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(process.env.MONGO_URL,() => console.log('Connected to the DB'))

app.use('/auth', require('./routes/authRouter'))
app.use('/api', jwt({secret: process.env.SECRET, algorithms: ['HS256']}))//api is endpoint that req a token. anything that starts w/api needs a token also creayes a req.user(payload)
app.use('/api/todo', require('./routes/todoRouter.js'))//the api before todo has now protected todo route 
//token needed to get into todo endpoint 

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){//error handling for expressjwt
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})