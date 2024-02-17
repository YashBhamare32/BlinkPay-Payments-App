import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Button } from "../Button"
const searchLink = import.meta.env.VITE_SEARCH_FILTER_CALL;

export const Userbar = ()=>{
    //backend call instead
    const [users , setUsers] = useState([])
    const [filter , setFilter] = useState("");

    useEffect(()=>{
        axios.get(searchLink + filter)
            .then(response =>{
                setUsers(response.data.user);
            })
    } , [filter])

    return(
        <div className="ml-2">
            <div className="text-lg font-bold p-2 mt-2">
                Users
            </div>
            <input onChange={(e)=>{
                setFilter(e.target.value)
            }} type="text" placeholder="Search Users..." className="shadow border-2 p-1 mx-2 w-full" />
            <div>
                {users.map(user => <User user={user}/>)}
            </div>
        </div>
    )
}
function User({user}){
    const navigate = useNavigate();
    return(
        <div className="mt-4 ml-2 w-full flex justify-between ">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 mb-1">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0].toUpperCase()}
                    </div>
                </div>
                <div className="mt-4 font-semibold h-full">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <div >
                {/* <button className="bg-gray-950 text-white p-2 rounded-md m-2">Send Money</button> */}
                {/* <Link onClick={()=>{
                    navigate("/send?id="+user._id+"&name="+user.firstName);
                }} to="/send" className="btn btn-primary">Send Money</Link> */}
                
                <Button text={"Send Money"} onClick={()=>{
                    navigate("/send?id="+user._id+"&name="+user.firstName);
                }}/>
            </div>
        </div>
    )
}