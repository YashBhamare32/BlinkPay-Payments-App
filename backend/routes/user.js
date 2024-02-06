const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require("zod");
const {User} = require("../db")
const { JWT_SECRET } = require("../config")
const userRouter = express.Router();

const signupSchema = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
})

userRouter.post("/signup" , async (req , res)=>{
    const { success } = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email already taken / Incorrect inputs succ"
        })
    }

    const existingUser = await User.findOne({
        username:req.body.username
    })  
    if(existingUser){
        return res.json({
            message: "Email already taken / Incorrect inputs exist"
        })
    }

    const newUser = await User.create({
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })
    const userId = newUser._id;
    const token = jwt.sign({
        userId
    } , JWT_SECRET);

    res.json({
        message: "User created successfully",
        token:token
    })
    
})

//signin route

const signinSchema = zod.object({
    username:zod.string().email(),
    password:zod.string()
})
userRouter.post("/signin" , async (req , res)=>{
    const { success } = signinSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message: "Incorrect Inputs"
        })
    }

    const user = await User.findOne({
        username:req.body.username,
        password:req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId:user._id
        } , JWT_SECRET);

        res.json({
            token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

module.exports = userRouter;

