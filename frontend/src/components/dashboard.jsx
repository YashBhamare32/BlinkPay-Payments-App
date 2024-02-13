import { Appbar } from "./dashboard_components/AppBar";
import { Balancebar } from "./dashboard_components/BalanceBar";
import { Userbar } from "./dashboard_components/Users";

export function Dashboard(){
    return (
        <div>
            {/* Change User to actual user's firstname */}
            <Appbar firstName={"User"}/>
            <Balancebar value={10000}/>
            <Userbar />
        </div>
    )
}