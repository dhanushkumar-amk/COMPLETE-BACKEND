const EventEmittter = require('events');

class MyCustomEmitter extends EventEmittter{
    constructor(){
        super();
        this.greeting = "Hello"
    }

    greeting(name){
        this.emit("greeting", `${this.greeting}, ${name}`)
    }
}

const myCustomEmitter = new MyCustomEmitter();
myCustomEmitter.on('greeting', (input) => {
    console.log(`Greeting event`, input);
})


console.log(myCustomEmitter.greeting("dhanush"));
