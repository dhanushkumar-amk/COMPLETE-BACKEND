
setTimeout(() => {
    console.log("Running after 3 seconds...");
}, 3000);


const callbackFn = () => {
    console.log("Call back function....");
}
setTimeout(callbackFn, 3000);


function greetUser(name){
    console.log(`My name is ${name}`);
}

greetUser("dhanush")
