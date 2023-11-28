require('dotenv').config();
const connectDb = require('./db/connect')

// const Product = require('./model/product')

const Pro = require('./model/pro')

// const Productjson = require('./product.json')

const anotherProductjson = require('./pro.json')

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URL)
        await Pro.deleteMany();
        await Pro.create(anotherProductjson);
        console.log("success");
    }
    catch (err) {
        console.log(err)
    }
}

start()