import { Server } from 'Socket.io'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    // io.on('connection', socket => {
    //   socket.on('sendNotification', data => {
    //     console.log(data)
    //     io.emit('sendNotification', data)
    //     console.log(data)
    //   })
    // })
    res.socket.server.io = io
    io.on('connection', socket => {
      socket.on('sendNotification', msg => {
        console.log(msg)
        socket.emit('sendNotification', msg)
      })
    })
  }
  res.end()
}

export default SocketHandler

// import { socket } from 'socket-io'

// const server = app.listen(port, () => {
//   console.log("server running", port)
// })

// io = socket(server)
// io.on("connection", (socket) => {

//   socket.on('sendNotification', data => {
//     io.emit('sendNotification', data)
//     console.log(data)
//   })

//   socket.on('disconnect', () => {
//   })
// });
