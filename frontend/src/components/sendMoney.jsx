export function SendMoney(){
    return(
        <div className="h-screen bg-gray-300 flex items-center justify-center">
            <div className="shadow w-2/6 bg-white p-12 rounded-lg">
                <div className="flex justify-center mb-20 font-bold text-3xl">
                    Send Money
                </div>

                <div className="flex">
                    <div className="rounded-full h-12 w-12 bg-green-500 flex justify-center mt-1 mr-2 mb-1">
                        <div className="flex flex-col justify-center h-full text-xl text-white">
                            A 
                        </div>
                    </div>
                    <div className="flex font-bold text-2xl justify-center items-center ml-2">Friend's name</div>
                </div>

                <div>
                    <div className="m-2 font-bold">Amount (in Rs.)</div>
                    <div className="m-2">
                        <input type="text" placeholder="Enter amount" className="border-2 w-full h-12 rounded-md pl-2 placeholder-black" />
                    </div>
                    <div className="m-2">
                        <button className="bg-green-500 text-white w-full h-9 mt-2 rounded-md">Initiate transfer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}