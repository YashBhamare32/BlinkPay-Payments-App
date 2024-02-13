import { useState } from "react"

export const Balancebar = ({value})=>{

    return <div className="flex p-2 mt-4">
        <div className="text-lg font-bold ml-2">
            Your Balance 
        </div>
        <div className="ml-2 text-lg font-semibold">
            Rs. {value}
        </div>
    </div>
}