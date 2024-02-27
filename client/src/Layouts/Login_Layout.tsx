import DashboardHeader from "../shared/Headers/Dashboard-Header/DashboardHeader";
import { Outlet } from "react-router-dom";
import './layout.css'
export default function Login_Layout() {
  return (
    <>
      <DashboardHeader />
      <main className="layout-wrapper">
        <Outlet />
      </main>
    </>
  );
}
