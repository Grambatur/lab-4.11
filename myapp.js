var express = require('express')
var http = require('http');
var server = http.createServer(app);
var port = process.env.IP || 3000;
var io = require('socket.io')(app);
var app = require('http').createServer(handler);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.sendFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

server.listen(port, function() {console.log('Listening' + port);
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
