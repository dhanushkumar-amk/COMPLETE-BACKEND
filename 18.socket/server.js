const express = require('express');
const http = require('http')
const socketIo = require('socket.io')

const app = express();
const server = http.createServer(app)

// init socket.io and then attach to a http server
const io = socketIo(server)

app.use(express.static('public'));

const users = new Set();
io.on("connection", (socket) => {
    console.log('A user is now conncted');

    // handle users when they will join a chat
    socket.on('join', (userName) => {
        users.add(userName)

        //broadcast to all users that new users is joined
        io.emit('userJoined', userName);

        // send updated users list all clients
        io.emit('userList', Array.from(users));
    })
    // handle incoming chat messages

    // handle user disconnection

})

server.listen(8080, () => {
  console.log('Server started - http://localhost:8080');
})
