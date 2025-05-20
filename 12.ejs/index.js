const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// render the simple content in ejs
app.get('/', (req, res) => {
    res.render('index', { userName: 'dhanushkumar' }); // index is index.ejs file name
});

// Dynamic Content with EJS
app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'Phone', price: 20000 },
        { id: 3, name: 'Tablet', price: 30000 },
    ];
    res.render('products', { products });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
