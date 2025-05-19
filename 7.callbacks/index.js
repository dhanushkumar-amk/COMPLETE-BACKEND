// a callback is a function passed as an argument to another function, to be executed after the completion of an asynchronous operation. Callbacks are a fundamental way to handle asynchronous tasks, such as reading files, making network requests, or interacting with databases

// https://www.freecodecamp.org/news/how-to-use-callback-functions-in-javascript/

const fs = require('fs')

function person(name, callbackFn){
        console.log(`hello ${name}`);
        callbackFn();
        // address()
}

function address(){
    console.log("India 🚀 ");
}

person("Dhanushkumar", address);


fs.readFile("input.txt", "utf8", (err, data) => {
    if(err){
        console.log("error on reading a file", err);
        return
    }
    console.log(data);
})


