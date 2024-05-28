import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { productRouter } from './routes/productRouter.js';
import dbConnection from './lib/dbConnection.js';

//dotenv config
dotenv.config({
    path: ".env"
});


//server config
const app = express();
const PORT = process.env.PORT



// middlewares
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit:'50mb', extended: true}))
app.use(cors())


//DB Connection
dbConnection();



//routes
app.use("/api/products", productRouter)



//server listerning
app.listen(PORT, () => {
    console.log("Server Running on the Port", PORT)
})


