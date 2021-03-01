import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js"
//___________________________________________ Config ___________________________________________________________/

const app = express();
const port = 9000;





//__________________________________________middlwares_______________________________________________________/





//_________________________________________Monge DataBase__________________________________________________/


const connection_url="mongodb+srv://demoU:5z2m4yZW@cluster0.48g1p.mongodb.net/yo-yoDatabase?retryWrites=true&w=majority"
mongoose.connect(connection_url,{useNewUrlParser:true,
                                useCreateIndex:true,
                                useUnifiedTopology:true});

//______________________________________________API________________________________________________________/

app.get("/",(req,res)=>res.status(200).send("hello word"));

app.get("/data",(req,res)=>res.status(200).send(Data));

app.post("/post/video",(req,res)=>{
    const dbVideos= req.body       
    Videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        } 
    

});

//_____________________________________________listen_____________________________________________________/
app.listen(port,()=>{console.log(`localhost are online port:${port}`)})