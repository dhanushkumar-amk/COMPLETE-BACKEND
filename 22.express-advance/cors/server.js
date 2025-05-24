
const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors');
const { configureCors } = require('./config/cors')

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json())
app.use(configureCors()); // custom configure of cors
// app.use(cors()) // cors() middleware allows all origins (*), all HTTP methods, and includes standard headers.

app.listen(PORT, () => {
    console.log("Server is running on port : ", PORT);
})
