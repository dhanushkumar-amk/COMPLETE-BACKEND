
function delayFn(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}


async function delayedGreet(name) {
    await delayFn(2000)
    console.log(name);
}
delayedGreet("dhanushkumar");


async function division(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error("Can't divide by zero");
        }
        return num1 / num2;
    } catch (error) {
        console.log("error :", error);
        return null;
    }
}

async function Main() {
    console.log(await division(5,2));
    console.log(await division(5,0));
}
 Main();
