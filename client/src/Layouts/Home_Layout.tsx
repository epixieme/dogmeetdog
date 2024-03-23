import Footer from "../shared/Footer/Footer";
import Header from "../shared/Headers/Main-Header/Header";
import { Outlet } from "react-router-dom";
import "./homeLayout.css";
export default function Home_Layout() {
  return (
    <div>
      <Header />
      <main className="layout-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
