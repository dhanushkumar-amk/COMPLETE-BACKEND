const Author = require('../models/authors')
const Book = require('../models/Book')

const createAuthor = async(req, res) => {
    try {
  const author =  new Author(req.body);
        await author.save();

           res.status(201).json({
            success : true,
            message : "success",
            date : author
        })
    } catch (error) {
         console.log("error" , error);
        res.status(500).json({
            success : false,
            message : "Some error aquired"
        })
    }
}


const createBook = async(req, res) => {
    try {
        const book =  new Book(req.body);
        await book.save();

           res.status(201).json({
            success : true,
            message : "success",
            date : book
        })

    } catch (error) {
         console.log("error" , error);
        res.status(500).json({
            success : false,
            message : "Some error aquired"
        })
    }
}


const getBookWithAuthor = async(req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author') // combine book and author
        
        if(!book){
            return res.status(400).json({
            success : false,
            message : "book not found"
                })
        }

         res.status(200).json({
            success : true,
            message : "success",
            date : book
        })

    } catch (error) {
         console.log("error" , error);
        res.status(500).json({
            success : false,
            message : "Some error aquired"
        })
    }
}


module.exports = {createAuthor, createBook, getBookWithAuthor}
