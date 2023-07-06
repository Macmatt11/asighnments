const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    user:{//reference to the user who made it
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]

})






module.exports = mongoose.model("Issue", issueSchema)