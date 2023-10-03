// Readline module for reading a file asynchronously and write to another file asynchronously
const readLine = require('readline');

// fs module for reading and writing files
const fileSystem = require('fs');



fileSystem.readFile('./files/start.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    fileSystem.readFile(`./files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);
        fileSystem.readFile(`./files/append.txt`, 'utf-8', (error3, data3) => {
            console.log(data3);

            // writeFile method writes the data to the file asynchronously.
            // it gets 3 parameters: file path, data and a callback function
            fileSystem.writeFile('./files/output.txt', `${data1} \n\n${data2}\n\n${data3} \n\n Date Created : ${new Date()}`, () => {
                console.log("File return Successfully");
            });
        });
    });
});


// At the above nested call-back function creates a call-back hell.


console.log("Reading the file asynchronously...3");