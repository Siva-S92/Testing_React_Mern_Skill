import mongoose from "mongoose";


const dbConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log("MongoDB Connected Successfully")
        }
    } catch (error) {
        console.log(error)
    }
};
export default dbConnection;