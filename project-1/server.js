require('dotenv').config();
const express = require('express');
const  connectDB  = require('./config/db');
const bookRoutes = require('./routes/bookRoutes')

const app = express();

// mongoDB
connectDB();

// middleware
app.use(express.json())

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is listerning on port :", PORT);
})
