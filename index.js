var express=require("express");
var mysql2=require("mysql2");
var app=express();
require("dotenv").config();
console.log(process.env);
var conn=mysql2.createConnection({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database,
});
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected to mysql db");
    }
})
app.get("/",(req,res)=>{
    res.send("hello");
});
var port=process.env.port;
app.listen(port,()=>{
    console.log(`local host:${port}`);
})