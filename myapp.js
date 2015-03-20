var express = require('express');
var http = require('http');
var port = process.env.port || 20000;
var app = express();
var server = http.createServer(app);

server.listen(port, function() {
   console.log('Listening' + port);
});




app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});



