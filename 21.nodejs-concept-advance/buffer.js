// https://www.geeksforgeeks.org/what-is-buffer-in-node-js/

//  Buffer is a way to store and manipulate binary data in Node.js. Binary data refers to data that consists of binary values, as opposed to text data, which consists of characters and symbols. Examples of binary data include images, audio and video files, and raw data from a network.

// Buffer is Object
// fixed length
// more efiicent for binary representation  and string
// file system and crypography, image processing

const bufferOne = Buffer.alloc(10) // allocat the buffer of 10bytes and init with all zeros default
console.log(bufferOne); // <Buffer 00 00 00 00 00 00 00 00 00 00>


const bufferString = Buffer.from("Hello")
console.log(bufferString); //<Buffer 48 65 6c 6c 6f>

const bufferFromArraysOfInteger = Buffer.from([1,2,3,4,5,6])
console.log(bufferFromArraysOfInteger); // <Buffer 01 02 03 04 05 06>

// Writing data to Buffer
const bufferWritefunction = Buffer.alloc(15);
bufferWritefunction.write("Happy Learning")

// Reading data from Buffer
const readTheDataFromBuffer = bufferWritefunction.toString();
console.log(readTheDataFromBuffer);

// Check object is buffer or not
const isBufferOrNot = Buffer.alloc(10)
console.log(Buffer.isBuffer(isBufferOrNot)); // true

// read a single byte in string
console.log(bufferString[0]); // 72


// Slicing data
const bufferOld = new Buffer('dhanushkumar');
const bufferNew = bufferOld.slice(0, 7);
console.log(bufferNew.toString()); // dhanush


// concatenate two buffer
const buffer1 = new Buffer('Dhanushkumar ');
const buffer2 = new Buffer('developer');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString()); //Dhanushkumar developer

//buffer to json
console.log(buffer1.toJSON());
