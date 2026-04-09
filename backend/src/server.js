// const express= require('express')
import cookieParser from 'cookie-parser';
import express from 'express';
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import path from 'path'
import { connectDB } from './lib/db.js';
import { ENV } from './lib/env.js';


const app=express();
const PORT=ENV.PORT;

app.use(express.json()); //req.body
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use(cookieParser());   

const __dirname=path.resolve()


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB();
});

//Deploying

if(ENV.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../frontend/dist')))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,'../frontend/dist/index.html'))
    })
}
