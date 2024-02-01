import Footer from "../shared/Footer/Footer"
import Header from "../shared/Headers/Main-Header/Header";
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
