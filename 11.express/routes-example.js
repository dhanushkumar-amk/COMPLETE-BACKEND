const express = require('express');
const app = express();

// root route
app.get("/", (req, res) => {
    res.send("Welcome to my root page");
})

// get all products
app.get('/products', (req, res) => {
    const products = [
        {
            id : 1,
            name : "Product 1",
        },
         {
            id : 2,
            name : "Product 2",
        },
         {
            id : 3,
            name : "Product 3",
        },
    ]

    res.json(products)

})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
