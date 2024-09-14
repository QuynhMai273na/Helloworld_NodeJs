const http = require('http'); // Sử dụng thư viện http của Node.js

const port = process.env.PORT || 3005; // Sử dụng biến môi trường PORT nếu có hoặc 3005

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// Lắng nghe trên cổng được chỉ định mà không cần hostname
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
