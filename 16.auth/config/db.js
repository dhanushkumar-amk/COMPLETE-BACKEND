
const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB is connected successfully");
    } catch (error) {
        console.log("error on creating the datbase \n", error);
        process.exit(1);
    }
}

module.exports = connectDB
