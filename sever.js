// Hello world project thuan node js
const http = require('http');//node.js

const hostname = 'localhost';
const port = process.env.PORT || 3005;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
