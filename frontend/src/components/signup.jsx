import { useState } from "react";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import {React} from "react"
import axios from "axios"
import { Link } from "react-router-dom";
export const Signup = ()=>{
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    return(
        <div className=" flex justify-center p-12 text-center h-screen bg-gray-400">
            <div className=" bg-white rounded-md p-6">
                <div>
                    <Heading text="Sign Up" info="Enter your information to create an account"/>
                    
                </div>
                <div>
                    <Input onChange={(e)=>{
                        setFirstName(e.target.value);
                    }} title={"First Name"} placeHolder={"John"}/>
                    <Input onChange={(e)=>{
                        setLastName(e.target.value);
                    }} title={"Last Name"} placeHolder={"Doe"}/>
                    <Input onChange={(e)=>{
                        setUsername(e.target.value);
                    }} title={"Email-Id"} placeHolder={"johndoe@example.com"}/>
                    <Input onChange={(e)=>{
                        setPassword(e.target.value);
                    }} title={"Password"} placeHolder={""}/>
                    
                </div>

                <Button onClick={async ()=>{
                    await axios.post("http://localhost:3000/api/v1/user/signup" , {
                        username,
                        firstName,
                        lastName,
                        password
                    })
                    console.log("Done")
                }} text={"Sign Up"}/>
                <BottomWarning text={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    )
}
