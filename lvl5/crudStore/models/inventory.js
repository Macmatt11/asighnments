const mongoose = require('mongoose')
const Schema = mongoose.Schema

//inventory schema blueprint
const inventorySchema = new Schema({
    productName:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum:['food','hygiene','toys', 'electronics', 'clothing' ]
    },
    price:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventorySchema)