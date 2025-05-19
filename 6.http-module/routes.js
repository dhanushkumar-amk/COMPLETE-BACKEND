const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url; // it gives the base url = http://local-host:3000

    if (url === '/') {
        res.end('It isa home page');
    }

    if (url === '/hello') {
        res.end("Hello from hello wolrd")
    }

})


const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on the port of ${port}`);
})
