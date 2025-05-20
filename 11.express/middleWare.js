const express = require('express');
const app = express();

// define middleware function
const myFirstMiddleware = ( req, res, next) => {
    console.log("This first midlleware runs on every request...");
    next(); app.get('/', (req, res) => {
    res.status(200).json({message : "Home page"})
})
}

// using middlware as a application level
app.use(myFirstMiddleware)

app.get('/', (req, res) => {
    res.status(200).json({message : "Home page"})
})

app.get('/about', (req, res) => {
    res.status(200).json({message : "About page"})
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
