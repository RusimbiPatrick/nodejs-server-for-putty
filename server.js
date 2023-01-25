const net = require('net');

const host = '127.0.0.1';
const port  = 3123;

net.createServer((socket) => {
    const timeStamp = Date.now()
    const id = `${socket.remoteAddress} : ${socket.remotePort}`

    console.log(`OK : ${timeStamp}`);

    socket.on('data', (data) => {
    console.log(`${id} : ${timeStamp} : ${data}`);
    socket.write(data.toString());
  });

 socket.on('close', (data) => {
   console.log(`${id} : ${timeStamp} : Client Disconnected`);
 });

}).listen(port, host);

console.log(`Listening on ${host}:${port}`);