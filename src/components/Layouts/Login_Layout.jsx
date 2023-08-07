
import Login_Header from "../Login_Header"
import { Outlet } from "react-router-dom"

export default function Login_Layout(){
    return (
        <>
        <Login_Header />
        <main className="layout-wrapper"><Outlet/></main>
        </>
    )
}