const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

io.on('connection', (socket) => {
  console.log('A user connected');
  
  // 处理连接事件，可以发送和接收实时消息
  socket.on('chat message', (message) => {
    console.log('Received message:', message);
    // 在这里可以处理消息并广播给其他连接的客户端
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// 监听一个端口，例如 1338
httpServer.listen(1338, () => {
  console.log('WebSocket服务器运行在1338端口');
});
