/* vim: sw=4 ts=4 expandtab */

//To incluide a module, use require 
// http is a module
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.end('Hello World!');
}).listen(8080);
