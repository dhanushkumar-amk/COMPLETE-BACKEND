const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req);
    res.end("Hello node js from http server");
})

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port of ${port}`);
})
