var http = require('http');
var url = require('url');
var port = process.env.PORT || 3000;

var logs=[];

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	if (req.url == "/log"){
		logs.push(res);
		console.log('added to the log array');
		res.write("You're listening to the log #" + logs.length + "\n")
	} else {
		var query = url.parse(req.url).query
		if (query != undefined){
			console.log('got a query for %s', query);
	
			for (var i=0;i<logs.length;i++){
				logs[i].write(query);
				logs[i].write('\n');
			}
		}
		res.end('Ok');
	}
});

server.listen(port);

console.log('server running at %s', port);
