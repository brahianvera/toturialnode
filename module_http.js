/* vim: sw=4 ts=4 expandtab */

/* TO include the http module, use require method*/
var http = require('http');

/*Module to do Split the query string, use to read parameters of a url*/
var url = require('url');

/*the http module can create an http server that listen to sever ports and gives a response back to the client.
for this  use createServer() method
*/
/*
    The funcition passed into the http.createServer() method, will be executed when someone tries to acces the computer on por 
    8080
*/
http.createServer(function(req, res){
    //HTTP header with content type html
    //200 to says all is OK
    res.writeHead(200,{'Content-Type':'text/html'});
    //res argument that represents the request from the client, as an object
    //req.url = is the part of the url after the domain name 
    //res.write(req.url);
    // to query string, the query string into readable parts
    var  q = url.parse(req.url, true).query;
    var txt = q.year+"  "+q.month;
    res.end(txt);
}).listen(8080);
