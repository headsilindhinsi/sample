const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    category : {
        type : String,
        required : true
    },

     type : {
        type : String,
        required : true
    },
     desc : {
        type : String,
        required : true
    },
     price : {
        type : Number,
        required : true
    },
     img : {
        type : String,
        required : true
    },
})

const productModel = mongoose.model("Product" , productSchema)

module.exports = productModel