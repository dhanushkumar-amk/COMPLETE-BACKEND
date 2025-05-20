const express = require('express')

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let books = [
    {
        id : 1,
        title : "book 1"
    },
     {
        id : 2,
        title : "book 2"
    },
     {
        id : 3,
        title : "book 3"
    },
];

// intro route
app.get('/', (req, res) => {
    res.json(
        {
            message : "Welcome to bookstore api"
        }
    )
})

// gett all books
app.get("/get", (req, res) => {
    res.json(books);
})

// get a single book based on a ID
app.get("/get/:id", (req, res) => {
    const book = books.find(item => item.id.toString(   ) === req.params.id);
    if (book)
        res.json(book);
    else
        res.json({message : "Book is not found..."})
})


// add a new Book
app.post("/add", (req, res) => {
    const newBook = {
            id : books.length + 1,
            title : `Book ${books.length + 1}`
    }
    books.push(newBook);
    res.status(200).json({
        data : newBook,
        message : "new book is uploaded"
    });
} )

app.delete('/delete/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const findIndex = books.findIndex(item => item.id === bookId);

    if (findIndex !== -1) {
        const deletedBook = books.splice(findIndex, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            data: deletedBook
        });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});


// app listern
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
