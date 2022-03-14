const express=require("express");

const app=express();
app.use(logger)

app.get("/user",(req,res)=>{
    res.send("Hello")
})

app.post("/user",(req,res)=>{
    console.log("Hello");
})

app.post("/student",(req,res)=>{
    console.log("Bye")
})

function logger(req,res,next){
    console.log("Before logger");
    next();
    console.log("After logger");
}
app.listen(6000,()=>{
    console.log("listening on port 6000");
})




