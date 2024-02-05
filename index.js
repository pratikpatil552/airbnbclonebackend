const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// starting the app
const app = express();

// using the middlewares
app.use(express.json());
app.use(cors({
    credentials:true,
    origin : 'http://localhost:3000',
}));

// database connection
mongoose
    .connect(process.env.MONGO_URL)
    .then((e)=>{console.log("mongo db connected")})



// test route just for checking
app.get("/test",(req,res)=>{
    return res.json("successful");
})


// for register purpose
app.post("/register",(req,res)=>{
   const {name, email, password} = req.body;
   res.json({name,email,password}); 
})

app.listen(4000);