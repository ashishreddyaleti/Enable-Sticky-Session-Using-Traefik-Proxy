const express = require('express'); 
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'src/index.html'));
});

io.on('connection', (socket) => {
  console.log('A client connected'); 

  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
    socket.broadcast.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
