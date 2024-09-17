const mongoose = require("mongoose");


const dbconnection = async()=>{
    try {
        await mongoose.connect(process.env.DBURl);
        console.log("mongodb connected successfully"); 
    } catch (error) {
        console.log("mongodb connected failed :"+ error)
    }
}

module.exports = dbconnection;