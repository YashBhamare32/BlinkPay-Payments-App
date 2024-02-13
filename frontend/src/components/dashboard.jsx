import { Appbar } from "./dashboard_components/AppBar";
import { Balancebar } from "./dashboard_components/BalanceBar";
import { Userbar } from "./dashboard_components/Users";
import {useEffect, useState} from "react"
import axios from "axios";

export const Dashboard =  ()=>{
    const [balance , setBalance] = useState(0);
    useEffect(()=>{
        const response = axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("token")
            }
        }).then(response=>{
            setBalance(response.data.balance);
        });
    } , [balance])
    return (
        <div>
            <Appbar firstName={localStorage.getItem("name")}/>
            <Balancebar value={balance}/>
            <Userbar />
        </div>
    )
}