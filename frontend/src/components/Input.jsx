export function Input({title , placeHolder , onChange}){
    return (
        <div className="p-2">
            <div className="font-bold">
                {title}
            </div>
            <div >
                <input onChange={onChange} className="border-2 w-80 p-1 rounded-md" type="text" placeholder={placeHolder} />
            </div>
        </div>
    )
}