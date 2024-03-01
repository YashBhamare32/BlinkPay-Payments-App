import { useEffect, useState } from "react";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import {React} from "react"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom";
import {ToastContainer , toast} from "react-toastify"
const signupLink = import.meta.env.VITE_SIGNUP_CALL;
console.log(signupLink)
export const Signup = ()=>{
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate();
    const notify = (notification)=>{
        toast(notification);
    }
    // const test = import.meta.env.VITE_BACKEND_URL;

    // console.log("GGg", test);
    // // console.log();
    return(
        <div className=" flex justify-center p-12 text-center h-screen bg-gray-400">
            <div className=" bg-white rounded-md p-6">
                <div>
                    <Heading text="Sign Up" info="Enter your information to create an account"/>
                    
                </div>
                <div>
                    <Input onChange={(e)=>{
                        setFirstName(e.target.value);
                    }} type={"text"} title={"First Name"} placeHolder={"John"}/>
                    <Input onChange={(e)=>{
                        setLastName(e.target.value);
                    }} type={"text"} title={"Last Name"} placeHolder={"Doe"}/>
                    <Input onChange={(e)=>{
                        setUsername(e.target.value);
                    }} type={"text"} title={"Email-Id"} placeHolder={"johndoe@example.com"}/>
                    <Input onChange={(e)=>{
                        setPassword(e.target.value);
                    }} type={"password"} title={"Password"} placeHolder={""}/>
                    
                </div>

                <Button onClick={async ()=>{
                    try {
                        const response = await axios.post(signupLink , {
                            username,
                            firstName,
                            lastName,
                            password
                        } ,{
                            headers:{"Content-type":'application/json'}
                        })
                        console.log("Response success" + response.data.done)
                        if(response.data.done==true){
                            // localStorage.setItem("token" , response.data.token)
                            localStorage.setItem("name" , firstName)
                            console.log(response.data.token);
                            notify("Signed up successfully");
                            setTimeout(()=>{
                                navigate("/signin");
                            } , 3000);
                        }else{
                            notify("Incorrect inputs / Mail already in use");   
                        }
                    } catch (error) {
                        console.log(error);
                        notify("Incorrect inputs / Mail already in use");   
                    }
                }} text={"Sign Up"}/>
                <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition: Bounce
                        />
                <BottomWarning text={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    )
}
