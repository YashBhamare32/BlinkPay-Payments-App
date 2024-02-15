export const Appbar = ({firstName}) => {
    return <div className="shadow h-14 flex justify-between w-full ml-2">
        <div className="flex flex-col justify-center h-full ml-4 font-bold text-3xl rounded-md p-2">
            BlinkPay
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                Hello , {firstName}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {firstName[0].toUpperCase()}
                </div>
            </div>
        </div>
    </div>
}