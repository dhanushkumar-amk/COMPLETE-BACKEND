const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message : "my first route in express js"})
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
