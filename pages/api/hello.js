import { Server } from "Socket.io";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server);
    res.socket.server.io = io
    io.on('connection', socket => {
      socket.on('sendNotification', msg => {
        console.log(msg)
        socket.emit('sendNotification', msg)
      })
    })
  }
  res.end();
}

export default SocketHandler;
