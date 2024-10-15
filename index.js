var express=require("express");
var app=express();
app.post("/",(req,res)=>{
    res.send("hello");
});
var port=0;
app.listen(port,()=>{
    console.log(`local host:${port}`);
})