const http = require ('http');
const fs = require ('fs');

const html = fs.readFileSync('./Template/index.html','utf-8');
const about = fs.readFileSync('./Template/about.html','utf-8');
const server = http.createServer((request, response) => {
    
    const path = request.url;
    
    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        console.log('Home page');

        // The place holder in index.html file replaced by the passing value
        response.end(html.replace('{{%CONTENT%}}','Home page'));
    }else if (path.toLocaleLowerCase() === '/about') {
        response.end(html.replace('{{%CONTENT%}}',about));
    }else {
        response.end("Error 404 page not found");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});