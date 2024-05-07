import { Link } from "react-router-dom";
import "./dashboardHeader.css";
import { useApolloClient } from "@apollo/client";
import { useDispatch } from "react-redux";
import { logout } from "features/Auth/state/authSlice";
import { useNavigate } from "react-router-dom";
import DmdNavIcons from "shared/DmdIcons/components/DmdNavIcons";
import { useSelector } from "react-redux";
import { RootState } from "store/types";
import { setSuccess } from "shared/state/NotificationMessageSlice";
import { useEffect } from "react";
import SuccessMessage from "shared/SuccessMessage/components/SuccessMessage";
import BurgerMenu from "features/Nav/BurgerMenu/components/BurgerMenu";
export default function DashboardHeader() {
  const navigate = useNavigate();
  const client = useApolloClient();
  const dispatch = useDispatch();
  const { success, error } = useSelector(
    (state: RootState) => state.NotificationMessage
  );

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        dispatch(setSuccess(null));
      }, 4000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  const handleLogout = async () => {
    await dispatch(logout());
    // Remove token from localStorage
    localStorage.removeItem("dogUser-user-token");
    // Reset the Apollo Client store after logout

    // check for if it is a promise
    // const result = client.resetStore();

    // if (typeof result.then === "function") {
    //   console.log("It returns a promise.");
    // } else {
    //   console.log("It does not return a promise.");
    // }
    await client.resetStore();
    // Navigate to the home page
    navigate("/");
  };

  return (
    <header className="dash-navigation-menu-container">
      <nav className={"dash-navigation-links-container"}>
        <Link to="/dashboard" className="nav-link">
          <DmdNavIcons source="Home" themeType="outlined" />
          <span>Dashboard</span>
        </Link>
        <Link to="/manage-account" className="nav-link">
          <DmdNavIcons source="ManageAccounts" themeType="outlined" />
          Manage Profile
        </Link>
        <Link to="/dashboard" className="nav-link">
          <DmdNavIcons source="Notifications" themeType="outlined" />
          Notifications
        </Link>
        <Link to="/nearby" className="nav-link">
          <DmdNavIcons source="Notifications" themeType="outlined" />
          Nearby
        </Link>
        <Link to="/dashboard" className="nav-link">
          <DmdNavIcons source="Forum" themeType="outlined" />
          Messages
        </Link>
        <Link to="/matches" className="nav-link">
          <DmdNavIcons source="Favorite" themeType="outlined" />
          Matches
        </Link>
        <Link to="/settings" className="nav-link">
          Settings
        </Link>
        <Link to="/help" className="nav-link">
          Help
        </Link>
        <button onClick={handleLogout}>logout</button>
        <SuccessMessage success={success} />
      </nav>
    </header>
  );
}
