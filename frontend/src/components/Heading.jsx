export function Heading({text , info}){
    return(
        <div className="w-80">
            <div className="text-center font-bold text-4xl">
                {text}
            </div>
            <div className="p-2 m-1 text-xl font-normal text-gray-500">
                {info}
            </div>
        </div>
    )
}