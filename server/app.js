require('dotenv').config()
const app = require('express')();
const http = require('http').createServer(app);
const PORT = 3000
// const cors = require('cors')
// const router = require('./routes')
const io = require('socket.io')(http);

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(router)

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('created', data => {
        io.emit('created', 'io emit')
        socket.broadcast.emit('created', 'broadcast')
    })
    socket.on('joining', data => {
        console.log(data)
        socket.broadcast.emit('joining', data)
    })
    socket.on('choose', data => {
        console.log(data, '-->choose')
        socket.broadcast.emit('choose', data)
    })
    socket.on('ready', data => {
        console.log(data, '-->ready')
        socket.broadcast.emit('ready', data)
    })
    socket.on('start', data => {
        socket.broadcast.emit('start', data)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
});

http.listen(PORT, () => {
    console.log('listening on *:3000');
});