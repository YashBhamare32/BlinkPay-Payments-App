import { BottomWarning } from "./BottomWarning";
import { Heading } from "./Heading";
import { Input } from "./Input";


export function Signup(){
    return(
        <div className=" flex justify-center p-12 text-center h-screen bg-gray-400">
            <div className=" bg-white rounded-md p-6">
                <div>
                    <Heading text="Sign Up" info="Enter your information to create an account"/>
                    
                </div>
                <div>
                    <Input title={"First Name"} placeHolder={"John"}/>
                    <Input title={"Last Name"} placeHolder={"Doe"}/>
                    <Input title={"Email-Id"} placeHolder={"johndoe@example.com"}/>
                    <Input title={"Password"} placeHolder={""}/>
                    
                </div>

                <div className="m-4 p-2 bg-black text-white rounded-md">
                    <button className="text-center">Sign Up</button>
                </div>
                <BottomWarning text={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
            </div>
        </div>
    )
}
