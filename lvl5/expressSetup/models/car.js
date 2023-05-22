const mongoose = require('mongoose')
const Schema = mongoose.Schema

//car blueprint
const carSchema = new Schema({
    make: {//this allows you to configure the data and make certain properties required. this reinforces data consistancy 
        type:String,
        required: true,
        enum:['toyota', 'nissan', 'mazda', 'honda', 'mitsubishi']
    },
    model: {
        type:String, 
        required: true,
    },
    year: Number//in this format these properties are optional
})
//alot of other properties to state for a key in a schema. check the documents on schemas 

module.exports = mongoose.model('Car', carSchema)//two parameters name and schema