
// import readline module
const readLine = require ('readline');

// import fs module
// this return an object
//  we assign that object to a variable named fileSystem
// We use this module to read and write files
const fileSystem = require ('fs');

let input = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

input.question('Enter your name: ',(name) =>{

    let writeData = `\n Written data :  ${name} \n Date : ${new Date()} `;

    // writeFileSync is a method of fileSystem object
    // it takes two arguments
    // first argument is the path of the file
    // second argument is the data to be written in the file
    // This write the data in the file
    // In here this write the user input
    fileSystem.appendFileSync('./files/input.txt',writeData);


    // After writing the data to the file this reads the data from the file
    const dataFromFile = fileSystem.readFileSync('./files/input.txt','utf-8');
    console.log(dataFromFile.toString());

    // close the input
    input.close();
});

