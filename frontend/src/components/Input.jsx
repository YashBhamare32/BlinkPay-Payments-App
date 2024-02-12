export function Input({title , placeHolder}){
    return (
        <div className="p-2">
            <div className="font-bold">
                {title}
            </div>
            <div >
                <input className="border-2 w-80 p-1 rounded-md" type="text" placeholder={placeHolder} />
            </div>
        </div>
    )
}