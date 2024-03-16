import { Link } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <header className="navigation-menu-container">
      <nav className={"navigation-links-container"}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/myaccount">My Account</Link>

        {/* // pop up modal and then logout and users details */}
      </nav>
    </header>
  );
}
