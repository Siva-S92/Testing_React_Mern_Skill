import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//dotenv config
dotenv.config({
    path: ".env"
});


//server config
const app = express();
const PORT = process.env.PORT



// middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


//DB Connection



//routes
// app.use("/api/products", )



//server listerning
app.listen(PORT, () => {
    console.log("Server Running on the Port", PORT)
})


