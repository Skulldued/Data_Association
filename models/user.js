const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
moongoose.connect("mongodb://127.0.0.1:27017/lolooooo");


const userSchema = moongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }
    ]
});


module.exports = moongoose.model("user",userSchema);