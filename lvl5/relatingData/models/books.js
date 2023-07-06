const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title:{
        type: String,
        required:true
    },
    likes:{
        type: Number,
        default: 0
    },
    author: {
        type: Schema.Types.ObjectId,//puts the id of the author on the book. this is the id of an existing author 
        ref: 'Author',//which model is this id from 
        required: true// makes it a requirment to have a book saved to db to have an author 
    }
})

module.exports = mongoose.model('Book', bookSchema)