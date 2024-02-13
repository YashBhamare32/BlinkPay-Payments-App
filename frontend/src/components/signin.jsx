import { useState } from "react";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import axios from "axios";
export const Signin = ()=>{
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    return(
        <div>
            <div className=" flex justify-center p-12 text-center h-screen bg-gray-400">
                <div className=" bg-white rounded-md p-6">
                    <div>
                        <Heading text="Sign In" info="Enter your credentials to access your account"/>
                        
                    </div>
                    <div>
                        <Input onChange={(e)=>{
                            setUsername(e.target.value);
                        }} title={"Email-Id"} placeHolder={"johndoe@example.com"}/>
                        <Input onChange={(e)=>{
                            setPassword(e.target.value);
                        }} title={"Password"} placeHolder={""}/>
                        
                    </div>

                    <Button onClick={async ()=>{
                        const response = await axios.post("http://localhost:3000/api/v1/user/signin" , {
                            username,
                            password
                        })
                        localStorage.setItem("token" , response.data.token);
                        console.log(response.data.token);
                    }} text={"Sign In"}/>
                    <BottomWarning text={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    )
}