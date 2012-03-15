var http = require('http');
var url = require('url');
var fs = require('fs');
var logview = fs.readFileSync('logview.html');
var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res){
	
	if (req.url == "/log"){
		console.log('log client connected');
	    res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(logview);
	} else if (req.url == "/tmp/logfile.txt"){
	    console.log('ajax request');
	    res.writeHead(200, {'Content-Type': 'text/plain'});
	    res.end(fs.readFileSync('./tmp/logfile.txt'));
	} else {
		console.log('got a request for %s', req.url);
		var query = url.parse(req.url).query;
		if (query != undefined){
			console.log('got a query for %s', query);
			var log = fs.createWriteStream('./tmp/logfile.txt', {'flags': 'a'});
			log.write(query + "\n");	
		}
	    res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end(query + ':: Logged');
	}
});

server.listen(port);

console.log('server running at %s', port);
