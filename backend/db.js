const mongoose = require('mongoose');
const {Schema} = mongoose;
mongoose.connect('mongodb+srv://bobbybhamare32:Bobby%402032@yash.wdjwqmp.mongodb.net/paytm');

const userSchema =new Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
}) 

const User = mongoose.model("User" , userSchema);

module.exports={
    User
};