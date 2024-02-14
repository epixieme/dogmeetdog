import { Link } from "react-router-dom";


export default function DashboardHeader() {
  const activeStyles = {
    textDecoration: "underline",
    color: "white",
  };

  return (
    <header className="nav-menu-container">
      <nav className={ "nav-links-container"}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>
    </header>
  );
}
