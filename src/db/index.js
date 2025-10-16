import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  

async function connectDB() {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log("DB connected: ", {connectionInstance})
    }   
    catch(error){
        console.error("ERROR: ", error);    
    }
}

export {connectDB};