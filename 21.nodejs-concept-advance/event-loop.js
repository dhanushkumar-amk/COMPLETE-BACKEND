// https://www.freecodecamp.org/news/javascript-engine-and-runtime-explained/
// https://www.freecodecamp.org/news/a-guide-to-the-node-js-event-loop/

// https://media.geeksforgeeks.org/wp-content/uploads/20200224050909/nodejs2.png
// https://media.geeksforgeeks.org/wp-content/uploads/20200224062607/phasesofloop-300x240.png

const fs = require('fs')
const crypto = require('crypto')

//The Node.js event loop has six phases,
//  1-> Timer phase, 2-> Pending Callbacks Phase, 3-> Idle Phase, 4 -> Poll Phase , 5 -> Check Phase, 6 -> Close Callbacks Phase



console.log("1. script started (callback stack)");

setTimeout(() => {
    console.log("2. setTimeout 0s callback (macro task)");
}, 0);

setTimeout(() => {
    console.log("3. setTimeout 0s callback (macro task)");
}, 0);

setImmediate(() => {
    console.log("4. setImmediate callback (macro task)");
});

Promise.resolve().then(() => {
    console.log("5. Promise resolved (micro task)");
});

process.nextTick(() => {
    console.log("6. process.nextTick callback (micro task)");
});

// This reads the current file asynchronously
fs.readFile(__filename, () => {
    console.log("7. file read operation (I/O callback)");
});

// This performs a CPU-intensive task asynchronously
crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (error, key) => {
    if (error)
        throw error;
    console.log("8. pbkdf2 operation completed (CPU intensive task)");
});

console.log("9. script ended (callback stack)");


// 1. script started (callback stack)
// 9. script ended.. (callback stack)
// 6. process.nextTrick callback (micro task)
// 5. Promise resolved (micro task)
// 2. settimeout 0s callback  (macro task)
// 3. settimeout 0s callback  (macro task)
// 4. setImmediate callback (macro task)
// 7. file read operations (IO callback)
// 8.pbkdf2 operation completed (cpu intensive task)
