import { Link } from "react-router-dom";
import "./dashboardHeader.css";
import { useApolloClient } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/types";
import { logout } from "features/auth/state/authSlice";
import HomeIcon from "@mui/icons-material/Home";
export default function DashboardHeader() {
  const client = useApolloClient();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("dogUser-user-token");
    localStorage.setItem("isLoggedIn", isAuthenticated.toString());
    client.resetStore(); // Reset the Apollo Client store after logout
  };

  return (
    <header className="dash-navigation-menu-container">
      <nav className={"dash-navigation-links-container"}>
        <Link to="/dashboard">
          <HomeIcon />
          Dashboard
        </Link>
        <Link to="/dashboard">Manage Profile</Link>
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
