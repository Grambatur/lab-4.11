var express = require('express');
var http = require('http');
var port = (process.env.PORT || 3000);
var app = express();
var server = http.createServer(app);

var io = require('socket.io').listen(server);


server.listen(port, function() {
   console.log('Listening' + port);
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
