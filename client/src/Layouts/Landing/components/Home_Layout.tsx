import Footer from "../../../shared/Footer/components/Footer";
import Header from "../../../features/Header/components/Header";
import { Outlet } from "react-router-dom";
import "../styles/homeLayout.css";
import { RootState } from "store/types";
import { useSelector } from "react-redux";
export default function Home_Layout() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const isNotAuthenticated = !isAuthenticated;

  return (
    <div className={isAuthenticated ? "dash-layout-wrapper" : ""}>
      <Header />
      <main className="layout-wrapper">
        <Outlet />
      </main>
      {isNotAuthenticated && <Footer />}
    </div>
  );
}
