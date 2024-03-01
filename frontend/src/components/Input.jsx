export function Input({title , placeHolder , onChange , type}){
    return (
        <div className="p-2">
            <div className="font-bold">
                {title}
            </div>
            <div >
                <input onChange={onChange} className="border-2 w-80 p-1 rounded-md" type={type} placeholder={placeHolder} />
            </div>
        </div>
    )
}