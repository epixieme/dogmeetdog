import DashboardHeader from "../shared/Headers/Dashboard-Header/DashboardHeader";
import { Outlet } from "react-router-dom";
import "./dashboardLayout.css";
export default function Dashboard_Layout() {
  return (
    <div className="dash-layout-wrapper">
      <DashboardHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
