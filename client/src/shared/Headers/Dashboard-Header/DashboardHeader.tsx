import { Link } from "react-router-dom";
import "./dashboardHeader.css";
import { useApolloClient } from "@apollo/client";
import { useDispatch } from "react-redux";

import { logout } from "features/auth/state/authSlice";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
export default function DashboardHeader() {
  const navigate = useNavigate();
  const client = useApolloClient();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
    // Remove token from localStorage
    localStorage.removeItem("dogUser-user-token");
    // Reset the Apollo Client store after logout
    client.resetStore();
    // Navigate to the home page
    navigate("/");
  };

  return (
    <header className="dash-navigation-menu-container">
      <nav className={"dash-navigation-links-container"}>
        <Link to="/dashboard">
          <HomeIcon />
          Dashboard
        </Link>
        <Link to="/manage-account">Manage Profile</Link>
        <Link to="/dashboard">Notification</Link>
        <Link to="/dashboard">Messages</Link>
        <Link to="/dashboard">Matches</Link>
        <Link to="/dashboard">Settings</Link>
        <Link to="/dashboard">Help</Link>
        <button onClick={handleLogout}>logout</button>

        {/* // pop up modal and then logout and users details */}
      </nav>
    </header>
  );
}
