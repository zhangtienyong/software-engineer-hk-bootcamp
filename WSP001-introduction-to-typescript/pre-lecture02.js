var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    } else if (req.url === '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    } else if (req.url === '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    } else {
        res.end('Invalid Request!')
    }
});

server.on('error', function (error) {
    if (error.code === 'EADDRINUSE') {
        console.log('Port 5000 is already in use. Trying another port...');
        server.listen(0); // Listen on any available port
    } else {
        console.error('Server error:', error);
    }
});

server.listen(5000, function () {
    console.log('Node.js web server is running on port', server.address().port);
});
