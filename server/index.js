const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const userModel = require("./model/model");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://sivajeeva459:siva123@cluster0.yxfdq.mongodb.net/first?retryWrites=true&w=majority&appName=Cluster0");

app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    userModel.findOne({email:email})
    .then((user)=>{
        if(user)
        {
            if(user.password === password)
            {
                res.json("login successfully");
            }
            else
            {
                res.json("incorrect password");
            }
        }
        else
        {
            res.json("record not exist");
        }
    })
})




app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})