const http = require ('http');
const fs = require ('fs');
const { request } = require('https');

// Read the HTML file from Template folder
const htmlFile = fs.readFileSync('./Template/index.html', 'utf-8');

// Create the server
const server = http.createServer ((request,response) => {
    response.end(htmlFile);
    console.log('Request is made to the server');
});


// Start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Server is running on port 3000');
});


