const mongoose = require("mongoose")

const BuySchema = mongoose.Schema({
    FullName : {
        type : String,
        required : true
    },
   
    Phone : {
        type : String,
        required : true
    },

    Street : {
        type : String,
        required : true
    },

    
    City : {
        type : String,
        required : true
    },

    
    State : {
        type : String,
        required : true
    },
    
    Zip : {
        type : String,
        required : true
    },

    Product : {
        type : String,
        required : true
    },

    ProductImage : {
        type : String,
        required : true
    },

    Total : {
        type : String,
        required : true
    },

    Payment : {
        type : String,
        required : true
    }
   

})

const buyModel = mongoose.model("Buy" , BuySchema)

module.exports = buyModel