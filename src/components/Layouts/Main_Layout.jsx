import Footer from "../Footer"
import Header from "../Header"
import { Outlet } from "react-router-dom"

export default function Main_Layout(){
    return (
        <>
        <Header />
        <main className=""><Outlet/></main>
        <Footer />
        </>
    )
}