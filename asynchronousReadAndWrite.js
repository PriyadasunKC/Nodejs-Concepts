// Readline module for reading a file asynchronously and write to another file asynchronously
const readLine = require('readline');

// fs module for reading and writing files
const fileSystem = require('fs');


// fs modules readFile method to read a file asynchronously.
// it gets 3 parameters: file path, encoding type and a callback function
// after reading the file, the callback function is called with 2 parameters: error and data
// The contents of the file assigned to the data parameter
// If there is some error happens that error is assigned to the error parameter
// The callback functions 1st parameter is error and 2nd parameter is data
fileSystem.readFile('./files/start.txt','utf-8', (error, data) => {
    
    // print the content of the file
    console.log(data);
});