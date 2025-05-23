import express, {Express, Request, Response} from "express";

const app : Express = express();

app.get('/', (req : Request , res : Response) => {
    res.send("hello from typescript with express")
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log("server is listening on port :", PORT);
})
