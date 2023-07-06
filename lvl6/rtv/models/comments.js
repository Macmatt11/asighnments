const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const commentsSchema = new Schema({
comment:{
    type:String,
},
user:{//reference to the user who made it
    type: Schema.Types.ObjectId,
    ref: 'User',
    // required: true
},
issue:{//refernced to what issue it was commented on
    type: Schema.Types.ObjectId,
    ref: 'Issue',
    // required: true
},
responseTo:{//response to another comment- iam respondint to this person
    type: Schema.Types.ObjectId,
    ref: 'User',
}
}, {timestamps: true})

module.exports = mongoose.model('Comment', commentsSchema)