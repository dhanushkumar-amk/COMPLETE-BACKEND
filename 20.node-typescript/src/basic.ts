console.log("hello world...");

//basic types
let isDone : Boolean = false
let age : number = 100
let name : string = "dhanushkumar"

let list : number[] = [1,2,3]
//let products : string[] = ['product 1', 'product 2']
let products : Array<string> = ['product 1', 'product 2']
let random : any = "dhnaushkumar"


let x : undefined = undefined;
let y : null = null

// enum datatype
enum color {
    Red, Green, Blue
}
let a : color = color.Green;
let b : color = color.Red;
let c : color = color.Blue;

// tuple
let tuple : [string, number] = ["dhanush", 10];



// interface and types
interface user {
    name : string;
    id : number;
    email? : string ; // (optional)
    readonly createdAt : Date;
}

const user : user = {
    name : "dhanushkumar",
    id : 10,
    email : "dhnaushkumar@gmail.com",
    createdAt : new Date()
}

type product = {
    title : string,
    id : number
}

const product1 : product = {
    title : "product 1",
    id : 1
}

// functions with type annotations
function add(num1 : number, num2 : number) : number {
    return num1 + num2;
}

const multiply = (num1 : number, num2 : number): number => {
    return num1 * num2;
}

function greet(name : string, greeting? : string): string{
    return '${name} ${greeting}'
}


