const http = require ('http');
const readFile = require ('fs');


const server = http.createServer((request, response)=>{
    console.log("Server received a request");

    // request method has a property called url.
    // it get the value that user entered un browser after the root url
    // Here assign it to the path variable
    let path = request.url;

    // Then as a response server sends the path as value to the browser window.
    response.end(path);
});


server.listen(8000,'127.0.0.1',()=> {
    console.log("Server is running");
});