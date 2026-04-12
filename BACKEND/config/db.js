const mongoose = require("mongoose")

const dotenv = require("dotenv")
dotenv.config()

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB is connected"))
    .catch(() => console.log("DB is not connected"))
    
}
module.exports = connectDB