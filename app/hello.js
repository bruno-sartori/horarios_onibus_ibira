var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node.JS!');
}).listen(process.env.PORT_APP_HELLO);
console.log('Server running at http://otonsolut.com:' + process.env.PORT_APP_HELLO);
