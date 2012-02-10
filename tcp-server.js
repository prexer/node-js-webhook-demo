var net = require('net')
var port = process.env.PORT || 3000;

var server = net.createServer(function(socket) {
	console.log('Listening on Port ' + port);
	socket.write('Listening on Port 8000 \n');
	socket.on('data', function(data) {
		console.log('%s',data);
	})
});
	server.listen(8000);