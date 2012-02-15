var net = require('net')
var port = process.env.PORT || 3000;

var server = net.createServer(function(socket) {
	console.log('server connected');
    socket.on('end', function() {
       console.log('server disconnected');
    });
	console.log('Listening on Port ' + port);
	socket.write('Listening on Port 8000 \n');
	socket.on('data', function(data) {
		console.log('---------------------------')
		console.log('request: %s',data);
	})
});
	server.listen(port);