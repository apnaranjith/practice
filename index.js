var express=require("express");
var mysql2=require("mysql2");
var app=express();
var conn=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"Ra16nj08it01h@",
    database:"9r",
});
conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected to mysql db");
    }
})
app.post("/",(req,res)=>{
    res.send("hello");
});
var port=0;
app.listen(port,()=>{
    console.log(`local host:${port}`);
})