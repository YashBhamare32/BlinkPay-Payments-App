const express = require("express");
const {Account} = require("../db")
const zod = require("zod");
const { default: mongoose } = require("mongoose");
const { authmiddleware } = require("../middleware");
const router = express.Router();

//get endpoint
router.get("/balance" ,authmiddleware ,  async (req , res)=>{
    const account = await Account.findOne({
        userId:req.userId
    }) 
    res.json({
        balance : account.balance
    })
})

//post endpoint
router.post("/transfer" ,authmiddleware , async (req , res)=>{
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount , to } = req.body;
    const account = await Account.findOne({
        userId:req.userId
    }).session(session);

    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Insufficient balance",
            done:false
        })
    }

    const toAccount = await Account.findOne({
        userId:to
    }).session(session);
    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg:"Invalid account",
            done:false
        })
    }

    //decrement from sending account
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);

    //increment from sending account
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    return res.json({
        msg:"Transfer successful",
        done:true
    })
})

module.exports = router;