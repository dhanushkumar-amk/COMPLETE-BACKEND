const express = require('express');

const app = express();

// application level settings
app.set('view engine', 'ejs');

// methods
app.get('/', (res, req) => {
    res.status(200).json({message : "my first route in express js"})
})

app.post('/api/data', (req, res) => {
    res.json({
        message : "Data recived",
        data : req.body,
    })
})


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Something went wrong")
})


const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
