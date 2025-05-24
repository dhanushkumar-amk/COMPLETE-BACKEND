import mongoose, { Schema, Document } from "mongoose";

interface UserInterface extends Document{
    name : String,
    email : String,
    age : Number,
    createdAt : Date
}

const userSchema = new Schema<UserInterface>({
    name : String,
    email : String,
    age : Number,
    createdAt : Date
})

const user = mongoose.model<UserInterface>("user", userSchema);
export {user, UserInterface}
