const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new Sales();

myEmitter.on('newSale', () => {
  console.log('New Sale');
});

myEmitter.on('newSale', () => {
  console.log('Customer name Jonas');
});

myEmitter.on('newSale', (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

myEmitter.emit('newSale', 9);

////////////////////////////////
const server = http.createServer();
server.on('request', (req, res) => {
  console.log('Request recieved!');
  res.writeHead(200);
  res.write(`<b>big booger</b>booger <br>`);
  res.end('request received!');
  console.log(req.url);
});

server.on('request', (req, res) => {
  console.log('Another request!');
  server.close();
});

server.on('close', (req, res) => {
  console.log('Server closed!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting for requests...');
});
