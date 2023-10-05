const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./Template/index.html', 'utf-8');
const about = fs.readFileSync('./Template/about.html', 'utf-8');

// Reading the JSON file using fs modules synchronous read method.
// And Convert JASON data into JS object using JSON.parse() method.
// And Store the converted data into jsonDataOfProducts variable.
const jsonDataOfProducts = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));

const server = http.createServer((request, response) => {

    const path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        console.log('Home page');

        // The place holder in index.html file replaced by the passing value
        response.end(html.replace('{{%CONTENT%}}', 'Home page'));
    } else if (path.toLocaleLowerCase() === '/about') {
        response.end(html.replace('{{%CONTENT%}}', about));
    } else if (path.toLocaleLowerCase() === '/products') {
        // Here we reads the JSON file using fs modules asynchronous read method.
        // When read the data from the file it store in tha data variable in callback function.
            response.writeHead(200, {'Content-type': 'application/json'});
            response.end('You are in product page');
            console.log(jsonDataOfProducts);
    } else {
        response.end("Error 404 page not found");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});
