// require express 
const express = require('express') ;

// create instance 
const app = express () ;

// midl global
app.use(express.json());

// moddelware route
app.use("/get/user", require ("./routes/user"))

// require dotenv 
require('dotenv').config() ; 

//require connect 
const connectDB = require('./config/connectDB') ;
connectDB();

// port 
const PORT = process.env.PORT 

// cretae server 
app.listen(PORT , err => {
    err ? console.log(err) : console.log(`server running  on PORT ${PORT}`)
})
