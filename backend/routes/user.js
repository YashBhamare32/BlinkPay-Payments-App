const express = require('express');
const jwt = require('jsonwebtoken');
const zod = require("zod");
const {User , Account} = require("../db")
const { JWT_SECRET } = require("../config")
const userRouter = express.Router();
const { authmiddleware } = require("../middleware");


//signup endpoint
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
            message: "Email already taken / Incorrect inputs succ",
            done:false
        })
    }

    const existingUser = await User.findOne({
        username:req.body.username
    })  
    if(existingUser){
        return res.json({
            message: "Email already taken / Incorrect inputs exist",
            done:false
        })
    }

    const newUser = await User.create({
        username:req.body.username,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password
    })
    const userId = newUser._id;

    await Account.create({
        userId,
        balance:1+Math.random()* 10000
    })
    const token = jwt.sign({
        userId
    } , JWT_SECRET);

    return res.json({
        message: "User created successfully",
        token:token,
        done:true
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
        return res.status(411).json({
            message: "Incorrect Inputs",
            done:false
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

        return res.json({
            token,
            firstName:user.firstName,
            done:true
        })
        return;
    }

    return res.status(411).json({
        message: "Error while logging in",
        done:false
    })
})

//update logic
const updateSchema = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional()
})
userRouter.put("/",  async (req , res)=>{
    const { success } = updateSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        })
    }
    const updatedUser = await User.updateOne(req.body , {
        _id:req.userId
    })

    return res.json({
        message: "Updated successfully"
    });
})

//get logic
userRouter.get("/bulk" , async(req , res)=>{
    const filter = req.query.filter || "";
    const users = await User.find({
        $or:[
            {
                firstName:{
                    "$regex": filter
                }
            },
            {
                lastName:{
                    "$regex":filter
                }
            }
        ]
    })

    return res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports = userRouter;