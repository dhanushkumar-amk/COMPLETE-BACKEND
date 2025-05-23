require('dotenv').config();
const express = require('express');
const  connectDB  = require('./config/db');
const productRoutes = require('./routes/products-routes')
const bookRoutes = require('./routes/book-route')

const app = express();

// database
connectDB();

// middleware
app.use(express.json())

// Routes
app.use('/api/products', productRoutes);
app.use('/api/reference', bookRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is listerning on port :", PORT);
})
