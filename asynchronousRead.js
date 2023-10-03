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
fileSystem.readFile('./files/start.txt', 'utf-8', (error, data) => {

    // print the content of the file
    console.log(data);
});

// This file complete its execution before the readFile method completes its execution
console.log("Reading the file asynchronously...1");



// readFile method reads the start.txt file asynchronously.
// then it reads the file whose name is the content of the start.txt file
// The data1 parameter printed when its call back function is called.
// Then the data1 data assigned to the another readFile functions name and read data from that file
// In here data1 received "input" from start.txt file
// Then nested readFile method reads the input.txt file
// The content of the input.txt file assigned to the data2 parameter
// Then it prints the data2 when its callback function is called.
fileSystem.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fileSystem.readFile(`./files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);
    });
});

console.log("Reading the file asynchronously...2");