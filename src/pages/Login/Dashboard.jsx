import { Outlet } from "react-router-dom"
export default function Dashboard(){

    return(
        <div>
        <h1>dashboard</h1>
        <div><Outlet/></div>
        </div>
    )

}