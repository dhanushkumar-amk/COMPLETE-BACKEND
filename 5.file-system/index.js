
const fs = require('fs')
const path =require('path')

// create a new folder
const dataFolder = path.join(__dirname, 'dataFolder');

// check if it is exists or not, if not exists then created it
if (!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data folder is created");
}

// create a file inside the dataFolder
const filePath = path.join(dataFolder, 'example.txt');

fs.writeFileSync(filePath, 'Hello from example.txt');
console.log("File is created successfully");


// read the content in file
const readTheFile = fs.readFileSync(filePath, 'utf8');
console.log(readTheFile);

// append the file
fs.appendFileSync(filePath, "\n new tex is imported... ");



// async way to create The File
const asyncFilePath = path.join(dataFolder, 'async-example.txt')
fs.writeFile(asyncFilePath, "Hello from async node js", (err) => {
    if(err)
        throw err;
    console.log("File is created successfully");

    fs.readFile(asyncFilePath, 'utf8', (error, data) => {
    if(err)
        throw err;
console.log(data);
    })
} )




// exercise
// const newFolder = path.join(__dirname, "newFolder");

// if (!fs.existsSync(newFolder)) {
//     fs.mkdirSync(newFolder);
// }

// const newFile = path.join(newFolder, 'index.txt')
// fs.writeFileSync(newFile, "hello world from...")
