const http = require('http');
const fs = require('fs');

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

    return output;
});

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
        response.writeHead(200, { 'Content-type': 'text/html' });
        let productResponseToClient = html.replace('{{%CONTENT%}}', productHTMLArray.join(','));

        // We use join() method to convert the array into string separated by separator.
        // By doing this return as a single string value not as an array. 
        response.end(productResponseToClient);

    } else {
        response.end("Error 404 page not found");
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000');
});
