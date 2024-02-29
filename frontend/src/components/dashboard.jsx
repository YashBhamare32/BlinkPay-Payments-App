import { Appbar } from "./dashboard_components/AppBar";
import { Balancebar } from "./dashboard_components/BalanceBar";
import { Userbar } from "./dashboard_components/Users";
import {useEffect, useState} from "react"
import axios from "axios";
const balanceLink = import.meta.env.VITE_BALANCE_CALL;

const test = import.meta.env.VITE_BACKEND_URL;

export const Dashboard =  ()=>{
    const [balance , setBalance] = useState(0);
    
    useEffect(()=>{
        try{
            const response = axios.get(`${test}/api/v1/account/balance` ,{
                headers:{
                    Authorization:"Bearer "+localStorage.getItem("token")
                }
            }).then(response=>{
                setBalance(response.data.balance);
            });
            console.log("Balance", balance);
        }catch(err){
            console.log("Error db", err);
        }
        
    } , [balance])
    return (
        <div>
            <Appbar firstName={localStorage.getItem("name")}/>
            <Balancebar value={balance}/>
            <Userbar />
        </div>
    )
}