const mongoose = require("mongoose")

// const uri = "mongodb+srv://shubhamkk922:XOUeOluuLEwbATZv@theapitest.w7tai2d.mongodb.net/theapitest?retryWrites=true&w=majority1"

const connetDb = (uri)=>{
    console.log("connected");
    return mongoose.connect(uri)
}

module.exports = connetDb   