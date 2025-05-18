//  mode js always use common js

const firstModule = require('./first-module')

// const add = firstModule.add(10, 20);
// const sub = firstModule.sub(10, 20);
// const divide = firstModule.add(10, 20);

// console.log(add);
// console.log(sub);
// console.log(divide);


try {
    console.log("Trying to divide by zero");
    let result = firstModule.divide(0,0);
    console.log(result);
} catch (e) {
    console.log(e.message);
}
