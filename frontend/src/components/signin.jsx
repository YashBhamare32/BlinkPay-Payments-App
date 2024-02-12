import { Heading } from "./Heading";
import { Input } from "./Input";

export function Signin(){
    return(
        <div>
            <div className=" flex justify-center p-12 text-center h-screen bg-gray-400">
                <div className=" bg-white rounded-md p-6">
                    <div>
                        <Heading text="Sign In" info="Enter your credentials to access your account"/>
                        
                    </div>
                    <div>
                        <Input title={"Email-Id"} placeHolder={"johndoe@example.com"}/>
                        <Input title={"Password"} placeHolder={""}/>
                        
                    </div>

                    <div className="m-4 p-2 bg-black text-white rounded-md">
                        <button className="text-center">Sign Up</button>
                    </div>
                    <div>
                        Don't have an account? 
                        <a className="underline font-bold" href="http://localhost:5173/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}