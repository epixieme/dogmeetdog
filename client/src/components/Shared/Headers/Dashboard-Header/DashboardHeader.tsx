import { Link } from "react-router-dom";
import "./dashboardHeader.css";

export default function DashboardHeader() {
  const activeStyles = {
    textDecoration: "underline",
    color: "white",
  };

  return (
    <header className="nav">
      <nav className="nav-links">
        <Link to="/login">Dashboard</Link>
        <Link to="/login/reviews">Reviews</Link>
      </nav>
    </header>
  );
}
