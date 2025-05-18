console.log("Node module wrapper ....");

console.log("__fileName in wrapper explorer",  __filename);
console.log("__dirName in wrapper explorer ",  __dirname);


function greet(name){
    console.log(`Hello ${name}`);
}

module.exports = {greet}

/*


(function (exports, require, module, __filename, __dirname) {
  Your code goes here
});

*/
