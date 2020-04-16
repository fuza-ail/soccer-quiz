const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('created',data=>{
    io.emit('created','io emit')
    socket.broadcast.emit('created','broadcast')
  })
  socket.on('joining',data=>{
    socket.broadcast.emit('joining',data)
  })
  socket.on('choose',data=>{
    socket.broadcast.emit('choose',data)
  })
});

http.listen(3002, () => {
  console.log('listening on *:3000');
});