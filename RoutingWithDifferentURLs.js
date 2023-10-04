const http = require ('http');
const readFile = require ('fs');

const server = http.createServer((request, response)=>{
    console.log("Server received a request");

    let path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        response.end("Welcome to home page");
    }else if(path.toLocaleLowerCase() === '/about'){
        response.end("Welcome to about page"); 
    }else if (path.toLocaleLowerCase() === '/contact') {
        response.end("Welcome to contact page");
    }else {
        response.end("Error 404 : Page not found");
    }
});

server.listen(8000,'127.0.0.1',()=> {
    console.log("Server is running");
});
