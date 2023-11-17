import DashboardHeader from "../Headers/Dashboard-Header/DashboardHeader";
import { Outlet } from "react-router-dom";

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
