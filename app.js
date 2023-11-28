const express = require('express')
require('dotenv').config();
const app = express()
const connectDb = require('./db/connect')
const PORT = process.env.PORT || 5000

const product_routes = require('./routes/product')


app.get("/",(req,res)=>{
    res.send("hello api enthusiast")
});


app.use('/api/products',product_routes)


const start = async () => {
   try{
        await connectDb(process.env.MONGODB_URL)
        app.listen(PORT, ()=>{
            console.log("server has Started at : ", PORT)
        })
   }
   catch(err){
    console.log(err)
   }
}
start();