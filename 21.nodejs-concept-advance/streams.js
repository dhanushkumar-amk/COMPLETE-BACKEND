// Imagine you’re downloading a video. Instead of waiting for the entire video to download before you can start watching, streaming allows you to start watching right away. Data is received in small chunks, and you can begin viewing as soon as you have enough data.

// In Node.js, this process is similar. When you read a file or receive data from an HTTP request, streams break the data into manageable chunks


// types
// Writable: We can write data to these streams. e.g., fs.createWriteStream().
// Readable: We can read data from these streams. e.g., fs.createReadStream().
// Duplex: Streams that are both, Writable as well as Readable. e.g., net.socket.
// Transform: Streams that can modify or transform the data as it is written and read. e.g., zlib.createDeflate.

// memory efficency and time efficency

const fs = require('fs')
const zlip = require('zlib') // compression
const crypto = require('crypto')
const { Transform } = require('stream')

class EncryptStream extends Transform{
    constructor(key, vector){
        super()
        this.key = key;
        this.vector = vector;
    }

    _transform(chunks, encodeing, callBack){
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.vector)
        const encrypted = Buffer.concat([cipher.update(chunks), cipher.final()])
        this.push(encrypted)
        callBack();
    }
}

const key = crypto.randomBytes(32);
const vector = crypto.randomBytes(16);


const readableStrams = fs.createReadStream('input.txt')

// create a new object to compress the stream data
const gzipString = zlip.createGzip();


const encryptStream = new EncryptStream(key, vector)

const WritableStram = fs.createWriteStream('output.txt.gz.enc')

//read -> compress -> encrypt -> write
readableStrams.pipe(gzipString).pipe(encryptStream).pipe(WritableStram);

console.log('Straming  -> compressing -> writing data');
