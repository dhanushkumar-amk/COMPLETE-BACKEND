require('dotenv').config();
const express = require('express');
const  connectDB  = require('./config/db');
const authRoutes = require('./routes/auth-routes')
const homeRoutes = require('./routes/home-route')
const adminRoutes = require('./routes/admin-route')
const uploadImageRoutes = require('./routes/Image-routes')

const app = express();

// database
connectDB();

// middleware
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/image', uploadImageRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is listerning on port :", PORT);
})
