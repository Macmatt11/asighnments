const mongoose = require('mongoose')
const Schema = mongoose.Schema

//bounty blueprint
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    living:{
        type: Boolean,
        required: true,
        enum: [true,false]
    },
    bounty: {
        type: Number, 
        required: true
    },
    type: String
})

module.exports = mongoose.model('Bounty', bountySchema)