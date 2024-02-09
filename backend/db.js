const mongoose = require('mongoose');
const { number } = require('zod');
const {Schema} = mongoose;
mongoose.connect('mongodb+srv://bobbybhamare32:Bobby%402032@yash.wdjwqmp.mongodb.net/paytm');

const userSchema =new Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
}) 

const AccountSchema = new Schema({
    userId:Schema.Types.ObjectId,
    balance:Number
})

const User = mongoose.model("User" , userSchema);
const Account = mongoose.model("Account" , AccountSchema);

module.exports={
    User,
    Account
};