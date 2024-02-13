export function Button({text , onClick}){
    return(
        <button onClick={onClick} className="my-4 p-2  w-full bg-gray-800 text-white rounded-md text-center">{text}</button>
    )
}