const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write('Hello World');
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('connection establisted..');

})

server.listen(3000);

console.log('server is On..');