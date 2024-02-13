import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom"

export const SendMoney = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const name = queryParams.get("name");
    const id = queryParams.get("id");

    const [amount , setAmount] = useState(0);
    console.log(localStorage.getItem("token"))
    return(
        <div className="h-screen bg-gray-300 flex items-center justify-center">
            <div className="shadow w-2/6 bg-white p-12 rounded-lg">
                <div className="flex justify-center mb-12 font-bold text-3xl">
                    Send Money
                </div>

                <div className="flex">
                    <div className="rounded-full h-12 w-12 bg-green-500 flex justify-center mt-1 mr-2 mb-1">
                        <div className="flex flex-col justify-center h-full text-xl text-white">
                            {name[0]}
                        </div>
                    </div>
                    <div className="flex font-bold text-2xl justify-center items-center ml-2">{name}</div>
                </div>

                <div>
                    <div className="m-2 font-bold">Amount (in Rs.)</div>
                    <div className="m-2">
                        <input onChange={(e)=>{
                            setAmount(e.target.value);
                        }} type="text" placeholder="Enter amount" className="border-2 w-full h-12 rounded-md pl-2 placeholder-black" />
                    </div>
                    <div className="m-2">
                        <button onClick={async()=>{
                            await axios.post("http://localhost:3000/api/v1/account/transfer" , {
                                to:id,
                                amount
                            },{
                                headers:{
                                    Authorization:"Bearer "+localStorage.getItem("token")
                                }
                            })
                        }} className="bg-green-500 text-white w-full h-9 mt-2 rounded-md">Initiate transfer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}