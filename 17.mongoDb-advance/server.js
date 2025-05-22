require('dotenv').config();
const express = require('express');
const  connectDB  = require('./config/db');
const productRoutes = require('./routes/products-routes')

const app = express();

// database
connectDB();

// middleware
app.use(express.json())

// Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is listerning on port :", PORT);
})
