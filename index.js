const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoute.js");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use("/api", router);
PORT = process.env.PORT || 4000;

const connectDB = async() => {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
}
app.listen(PORT, ()=>{
    try{
        connectDB();
        console.log(`Port is listening on port ${PORT}`);
    }catch(err){
        console.error(err.message);
    }
})