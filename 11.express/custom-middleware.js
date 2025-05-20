const express = require('express');
const app = express();

// custom middleware functions
const requestTimeStampLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(requestTimeStampLogger);

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
