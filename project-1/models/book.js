const mongoose = require('mongoose')
// import { Timestamp } from './../node_modules/bson/src/timestamp';


const bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : [true, "Book title is required"],
        trim : true,
        maxLength : [100, "book title con't not more than 100 characters"]
    },
    author : {
        type : String,
        required : [true, "Author name is required"],
        trim : true,
    },
    year : {
        type : Number,
        required : [true, "Publication year is required"],
        min : [1000, "year must be atleast 1000"],
        max : [new Date().getFullYear(), "Year can't be future"]
    }
}, {Timestamp : true}
)

module.exports = mongoose.model("Book", bookSchema);
