import { useState } from "react";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect, useNavigate } from "react-router-dom";
const signinLink = import.meta.env.VITE_SIGNIN_CALL;

export const Signin = ()=>{
    const navigate = useNavigate();
    const notify = ()=>{
        toast("Signed In Successfully");
    }
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
                        }} type={"type"} title={"Email-Id"} placeHolder={"johndoe@example.com"}/>
                        <Input onChange={(e)=>{
                            setPassword(e.target.value);
                        }} type={"password"} title={"Password"} placeHolder={""}/>
                        
                    </div>

                    <Button onClick={async ()=>{
                        try {
                            const response = await axios.post(signinLink , {
                                username,
                                password
                            })
                            console.log(response.success);
                            if(response.data.done==true||response.success==200){
                                localStorage.setItem("token" , response.data.token)

                                //get firstName from database logic
                                localStorage.setItem("name" , response.data.firstName);
                                console.log(response.data.token);
                                notify("Signed in successfully");
                                setTimeout(()=>{
                                    navigate("/dashboard");
                                } , 3000);
                            }else{
                                notify("Incorrect inputs / Error while logging in ");
                            }
                        } catch (error) {
                            // console.log(error);
                            notify("Incorrect inputs / Error while logging in ");
                        }
                    }} text={"Sign In"}/>


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
                    <BottomWarning text={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
                </div>
            </div>
        </div>
    )
}