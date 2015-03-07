var express = require('express')
var http = require('http');
var app = express();
var server = http.createServer(app);
var port = 3000;

server.listen(port, function() {console.log('Listening' + port);
});

app.get('/', function (request, response) {
   response.sendfile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));