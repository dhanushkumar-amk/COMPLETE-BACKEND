import { BunFile } from 'BunFile';

async function fileSystemOperation() {

    //read the file
    const file : BunFile = BunFile.file("read.txt")
    console.log(file.size);
    console.log(file.type);
}

fileSystemOperation();
