// This http module return a object.
// This this object we can crete a server.
const http = require('http');


// First we need to create the server.
// The call-back function execute every time new request hit the server.
// The call-back function take two parameter request and response.
// Store the return value of createServer method  in a server variable.
const server = http.createServer((request, response) => {
    
    console.log("New request received");
    
    // We can use this response object to send a message to client from server.
    response.end('<h1>This is HTML response </h1>');
});


// The we need to stare the server.

// The listen method take three parameter.
// First parameter is the port number.
// Second parameter is the host name.
// Third parameter is the call-back function.
server.listen(8000, '127.0.0.1', () => {
    console.log("Server started listening on port 8000");
});

// When the server start the listing to the port we can open a web browser and type the IP of local host with port number 127.0.0.8000 like, then in vs code  we can  see the print the new request received message.
// every time the call back function execute when new request hit the server.


