function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}
console.log('Promise lecture starts...');
delayFn(2000)
.then(() => console.log("After 2 second promise resolve"))
console.log("end")


function divideFn(num1, num2){
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("We can't perform division by zero...")
        }
        resolve(num1/ num2);
    })
}

divideFn(10, 20)
.then(result => console.log(result))
.catch(err => console.log(err))
