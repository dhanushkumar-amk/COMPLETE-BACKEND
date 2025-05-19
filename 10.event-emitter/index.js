const EventEmittter = require('events');

const myFirstEmitter = new EventEmittter()


// register a listener
myFirstEmitter.on('greet', (name) => {
    console.log("hello ", name);
})

myFirstEmitter.emit("greet", "Dhanushkmar");
