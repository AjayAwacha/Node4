// create server using NodeJS http Module
// const http = require('http');

// const port = 3600;
// const server = http.createServer((req, res) => {
//     console.log('Got Request path ', req.path);
//     res.end('Hello from server');
// });
// server.listen(port, '127.0.0.1', () => {
//     console.log('Server running on port ', port);
// });

// create server using Express
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello From Server');
});

const port = 3600;
app.listen(port, '127.0.0.1', () => {
    console.log('Server running on port ', port);
});

