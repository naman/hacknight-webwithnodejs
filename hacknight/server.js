var	http = require('http');
var url = require('url');

function start (route) {

	http.createServer(function  (request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname);

		route(pathname);

		response.write("AAAA");
		response.end();
	
	}).listen(8000);
}

s
exports.start = start;