const fs = require('fs')

fs.readFile("input.txt", "utf8", (err, data) => {
    if(err){
        console.log("error : ", err);
        return;
    }

    const modifyData = data.toUpperCase();
    
    fs.writeFile("output.txt", modifyData, (err) =>{
        if (err) {
            console.log("error on writing file : ", err);
            return;
        }

        console.log("Data written in another file");

        fs.readFile("output.txt", 'utf8', (error, data) => {
            if (err) {
            console.log("error on reading file : ", err);
            return;
        }

        console.log(data);
        })
    });
})
