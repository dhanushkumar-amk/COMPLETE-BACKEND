
const path = require('path')

console.log("Directory Name with path : ", path.dirname(__filename));
console.log("Directory Name only : ", path.basename(__dirname));
console.log("File name only :  ", path.basename(__filename));
console.log("File extension : ", path.extname(__filename));

const joinPath = path.join('/user', 'documents', 'nodejs-masterCourse', 'demoPathJoin');
console.log(joinPath);


const resolvePath = path.resolve('user', 'documents', 'nodejs-masterCourse', 'demoPathJoin');
console.log(resolvePath);

const normailzePath = path.normalize('user', 'documents', 'file', 'demo.tsx')
console.log("Normalize path : ",normailzePath); // simplify te path



// basename - get file name
// path.dirname() – Get the Folder Path
//  path.extname() – Get the File Extension
// path.resolve() – Absolute Path
// Sometimes, you need the full absolute path of a file, especially when working with files outside your current folder. The path.resolve() method creates an absolute path, meaning it gives you the full path starting from the root of your computer.
