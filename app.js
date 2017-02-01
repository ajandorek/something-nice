var http = require('http');

var PORT = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("You look very nice today 8)");
};

function handleRequest2(request, response) {
    response.end("You DON'T look very nice today >:P");
};

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

console.log('Server listening on: http://localhost:%s', PORT);
});

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {

console.log('Server listening on: http://localhost:%s', PORT2);
});