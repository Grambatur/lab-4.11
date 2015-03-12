var express = require('express');
var http = require('http');
var port = process.env.port || 3000;
var app = express();
var server = http.createServer(app);

server.listen(port, function() {
   console.log('Listening' + port);
});


var io = require('socket.io').listen(server.io, function () {
   io.set("transportsxhr-polling");
   io.set("pollingtion", 10);
});

app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
