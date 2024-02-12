import { useState } from "react"

export const Userbar = ()=>{
    //backend call instead
    const [users , setUsers] = useState([{
        firstName:"Yash",
        lastName:"Bhamare",
        id:1
    },{
        firstName:"Akshat",
        lastName:"Bhamare",
        id:1 
    }])
    return(
        <div className="ml-2">
            <div className="text-lg font-bold p-2 mt-2">
                Users
            </div>
            <input type="text" placeholder="Search Users..." className="shadow border-2 p-1 mx-2 w-full" />
            <div>
                {users.map(user => <User user={user}/>)}
            </div>
        </div>
    )
}
function User({user}){
    return(
        <div className="mt-4 ml-2 w-full flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 mb-1">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="mt-4 font-semibold h-full">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <div>
                <button className="bg-gray-950 text-white p-2 rounded-md m-2">Send Money</button>
            </div>
        </div>
    )
}