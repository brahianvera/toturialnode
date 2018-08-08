/* vim: sw=4 ts=4 expandtab */

//To incluide a module, use require 
// http is a module
var http = require('http');

//  to incluide my self module
var dt = require("./myfirstmodule");

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('The date and time are currently: '+dt.myDateTime());
    res.end();
}).listen(8080);
