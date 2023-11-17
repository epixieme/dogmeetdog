import Footer from "../Footer/Footer"
import Header from "../Headers/Main-Header/Header";
import { Outlet } from "react-router-dom";

export default function Main_Layout() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
