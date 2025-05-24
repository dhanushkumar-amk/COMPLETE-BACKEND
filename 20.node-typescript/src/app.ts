import express, {Express, NextFunction, Request, Response} from "express";
import { user, UserInterface } from "./models/User";

const app : Express = express();

app.use(express.json())

interface customRequest extends Request {
    startTime?: number
}
// middlware
app.use((req : customRequest, res : Response, next : NextFunction) => {
    req.startTime = Date.now();
    next();
})

app.get('/', (req : Request , res : Response) => {
    res.send("hello from typescript with express")
})

// post method
interface user {
    name : string,
    email : string,
}
/* interface Request<
    P = core.ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = core.Query,
    Locals extends Record<string, any> = Record<string, any>,
> extends core.Request<P, ResBody, ReqBody, ReqQuery, Locals> {}
 */
app.post('/user', (req : Request<{}, {}, user>, res : Response) => {
    const {name, email} = req.body;
    res.json({
        message : `user created ${name}`
    })
})

// get user by id
app.get('/user/:id', (req : Request<{id : String}>, res : Response) => {
    const { id } = req.params;
    res.json({
        userId : id
    })
})

// get the list of users
app.get('/users', async(req : Request, res : Response ) => {
    try {
        const currenUser : UserInterface[] = await user.find()
        res.status(200).json({
            message : "success",
            data : currenUser,
        })
    } catch (error) {
        res.status(400).json({
            message : "Some error"
        })
    }
})

const PORT : number = 3000;
app.listen(PORT,() => {
    console.log("server is listening on port :", PORT);
})
