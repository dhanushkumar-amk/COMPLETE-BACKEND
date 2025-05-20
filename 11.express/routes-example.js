const express = require('express');
const app = express();

// root route
app.get("/", (req, res) => {
    res.send("Welcome to my root page");
})

// products
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

// get all products
app.get('/products', (req, res) => {
    res.json(products)
})

// get specific products
// (dynamic routing)
app.get('/products/:productId', (req, res) => {
    const ProductID = parseInt(req.params.productId) // get the id on paramater
    const getSingleProduct = products.find(product => product.id === ProductID)
    if(getSingleProduct)
        res.json(getSingleProduct);
    else
        res.status(400).json({message : "Id not found"})
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
