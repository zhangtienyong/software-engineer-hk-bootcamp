import express from "express";
import http from "http";
import { Server as SocketIO } from "socket.io";

const app = express();
const server = new http.Server(app);
const io = new SocketIO(server);

io.on("connection", function (socket) {
    console.log(socket);
});

const PORT = 8080;

server.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
});
