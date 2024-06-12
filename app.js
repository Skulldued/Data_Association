const express = require("express");
const app = express();
const userImportSchema = require("./models/user");
const postTmportSchema = require("./models/posts");
app.get("/",(req,res)=>{
    res.send("Tannu jiii");
});

app.get("/create",async(req,res)=>{

    let createdUser = await userImportSchema.create({
        username:"sunny",
        email:"suu@gmail.com",
        age:25
    });

    res.send(createdUser);
});

app.get("/create/post",async(req,res)=>{
    let postCreated = await postTmportSchema.create({
        postData:"tannu post",
        user:"6669cd6b8a51572665eaa600"
    
    });
    let user = await userImportSchema.findOne({_id:"6669cd6b8a51572665eaa600"});
    user.posts.push(postCreated._id);
    await user.save();
    res.send({
        postCreated,user
    });
})

app.listen(3000,()=>{
    console.log("server started");
});