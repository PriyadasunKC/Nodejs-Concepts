const http = require('http');
const fs = require('fs');
const url = require('url');

const html = fs.readFileSync('./Template/index.html', 'utf-8');
const about = fs.readFileSync('./Template/about.html', 'utf-8');
const productList = fs.readFileSync('./Template/ProductList.html', 'utf-8');


// Reading the JSON file using fs modules synchronous read method.
// And Convert JASON data into JS object using JSON.parse() method.
// And Store the converted data into jsonDataOfProducts variable.
let jsonDataOfProducts = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));

// We use map function to iterate the jsonDataOfProducts array.
let productHTMLArray = jsonDataOfProducts.map((productFromArray) => {
    let output = productList.replace('{{%IMAGE%}}', productFromArray.productImage);
    output = output.replace('{{%MODEL_NAME%}}', productFromArray.modeName);
    output = output.replace('{{%MODEL_NUMBER%}}', productFromArray.modelNumber);
    output = output.replace('{{%MODEL_DIMENSIONS%}}', productFromArray.size);
    output = output.replace('{{%CAMERA%}}', productFromArray.camera);
    output = output.replace('{{%PRICE%}}', productFromArray.price);
    output = output.replace('{{%COLOR%}}', productFromArray.color);
    output = output.replace('{{%ID%}}', productFromArray.id);

    return output;
});

const server = http.createServer((request, response) => {
    
    // Here we use url module to parse the query string from the URL.
    // It parse method has two parameters, one is the URL and another one is boolean value.
    // if the boolean value is true it will convert the query string into object.
    // If it is false it will return the query string as it is.

    // {} is object destructuring string. Using this we can get the query and pathname from the url.parse() method.
    const {query,pathname:path} = url.parse(request.url, true);
    // const path = request.url;

    if (path === '/' || path.toLocaleLowerCase() === '/home') {
        console.log('Home page');

        // The place holder in index.html file replaced by the passing value
        response.end(html.replace('{{%CONTENT%}}', 'Home page'));
    } else if (path.toLocaleLowerCase() === '/about') {
        response.end(html.replace('{{%CONTENT%}}', about));
    } else if (path.toLocaleLowerCase() === '/products') {
        if (!query.id) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            let productResponseToClient = html.replace('{{%CONTENT%}}', productHTMLArray.join(','));
            response.end(productResponseToClient);
        }else {
            response.end("This is a product of id: " + query.id);
        }
       
    } else {
        response.end("Error 404 page not found");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});
