// 1 packages
import express from 'express';
import http from 'http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from "socket.io";

// 2 instance
const app = express();
const server = http.createServer(app);  // Use this server with socket.io
const io = new Server(server);          // Attach socket.io to HTTP server

// 3 serve HTML file
const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')));

// 4 define socket events

io.on("connection", (client) => {
    console.log("✅ User connected:", client.id);

    // used to pass the data from the server to client
    client.emit('message', 'Hello from client!');

    // we not discoonect the entire we just disconnect only a certain client
    client.on("disconnect", () => {
        console.log("❌ User disconnected", client.id);
    })
});

// 5 start the server
const PORT = 3000;
server.listen(PORT, () => console.log("🚀 Server is running on port:", PORT));
