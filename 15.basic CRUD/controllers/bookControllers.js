const bookModel = require('../models/book')

const getAllBooks = async(req, res) => {
    try {
        const allBooks = await bookModel.find();
         if(allBooks?.length > 0){
            res.status(200).json({
                success : true,
                message : "success",
                data :  allBooks
             })
            }
    } catch (error) {
         console.log("error", error);
    }
}


const getSingleBookById = async (req, res) => {
    try {
        const getBookId = req.params.id;
        const bookDetails = await bookModel.findById(getBookId);
        if (!bookDetails) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            success: true,
            data: bookDetails
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};


const addNewBook = async(req, res) => {
    try {
        const newBook = req.body;
        const book = await bookModel.create(newBook);

        if(book){
            res.status(200).json({
                success : true,
                message : "Book added successfully",
                date : book
             })
        }
    } catch (error) {
        console.log("error", error);
    }
}

const updateBook = async(req, res) => {
    try {
         const getUpdatedFormBookData = req.body;
         const getBookId = req.params.id;
         const updatedBook = await bookModel.findByIdAndUpdate(getBookId, getUpdatedFormBookData, {
            new : true,
         })

          if (!updatedBook) {
            res.status(404).json({message : "book is not found"})
         }

         res.status(200).json({message : "Book updated succesfully", data : updatedBook});

    } catch (error) {
         console.log("Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteBook = async(req, res) => {
     try {
         const getBookId = req.params.id;
         const deletedBook = await bookModel.findByIdAndDelete(getBookId)
         if (!deletedBook) {
            res.status(404).json({message : "book is not found"})
         }

         res.status(200).json({message : "Book deleted succesfully"});
    } catch (error) {
         console.log("Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
}


module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBook}
