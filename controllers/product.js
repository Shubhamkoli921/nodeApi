const { query } = require('express')
const Pro = require('../model/pro')

const getAllProducts = async (req,res)=>{


  
    
    const {company,name,featured ,select} = req.query
    const queryObject = {}

    let apiData = Pro.find(queryObject)

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }
    
    if(company){
        queryObject.company = company
        console.log(queryObject)
    }
    if(name){
        queryObject.name = {$regex:name , $options:"i"}
        console.log(queryObject)
    }
    if(featured){
        queryObject.featured = featured
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit)|| 3;
    let skip = (page - 1) * limit;
 
    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({myData, nbHits:myData.length})
    
}

const getAllProductsTesting = async (req,res)=>{

    const myData = await Pro.find(req.query).select("name company")
    console.log('query',req.query)
    res.status(200).json({myData})

}

module.exports = {getAllProducts,getAllProductsTesting}

// XOUeOluuLEwbATZv
// mongodb+srv://shubhamkk922:<password>@theapitest.w7tai2d.mongodb.net/?retryWrites=true&w=majority
// theapitest