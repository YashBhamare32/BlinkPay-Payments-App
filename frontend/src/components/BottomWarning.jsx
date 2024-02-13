import { Link } from "react-router-dom"
export function BottomWarning({text , buttonText , to}){
    return(
        <div className="flex justify-center">
            <div>
                {text} 
            </div>
            <Link className="font-bold underline" to={to}>
                {buttonText}
            </Link>
        </div>
    )
}