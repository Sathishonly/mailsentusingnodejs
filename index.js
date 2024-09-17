require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const dbconnection = require("./config/databaseconfig");
const userroutes = require('./routes/userroutes');


const app = express();

dbconnection();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use('/api',userroutes);


app.use((err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            "status_code": 400,
            "error_code": err.message || "Something went wrong",
        });
    }
    next();
});
app.use((req,res)=>{
    res.status(404).json({"status_code":404,"message":"routes not found"});
});

const port = 5000
app.listen(port,()=>{
   console.log(`nodejs connected successfully : http://127.0.0.1:${port}`);
});
