import { NavLink, useNavigate } from "react-router-dom";
import "../styles/webNav.css";
import DmdNavIcons from "shared/DmdIcons/components/DmdNavIcons";
import { RootState } from "store/types";
import { useDispatch, useSelector } from "react-redux";
import SuccessMessage from "shared/SuccessMessage/components/SuccessMessage";
import { useApolloClient } from "@apollo/client";
import { useEffect } from "react";
import { setSuccess } from "shared/state/NotificationMessageSlice";
import { logout } from "features/Auth/state/authSlice";
interface Props {
  activeStyles: {};
  inactiveStyles: {};
}

// const links = ["/meetdogs", "/about", "/login"];

const loggedOut = [
  {
    route: "/meetdogs",
    iconName: "Pets",
    iconType: "filled",
    title: "Meet the Dogs",
  },
  {
    route: "/about",
    iconName: "Info",
    iconType: "filled",
    title: "About",
  },
  {
    route: "/login",
    iconName: "AccountBox",
    iconType: "filled",
    title: "Login",
  },
];

const loggedIn = [
  {
    route: "/dashboard",
    iconName: "Home",
    iconType: "filled",
    title: "Dashboard",
  },
  {
    route: "/manageaccount",
    iconName: "ManageAccounts",
    iconType: "filled",
    title: "Manage Account",
  },
  {
    route: "/login",
    iconName: "AccountBox",
    iconType: "filled",
    title: "Login",
  },
];

export default function WebNav({ activeStyles, inactiveStyles }: Props) {
  const navigate = useNavigate();
  const client = useApolloClient();
  const dispatch = useDispatch();

  const { success, error } = useSelector(
    (state: RootState) => state.NotificationMessage
  );

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
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

  const navigationLinks = isAuthenticated ? loggedIn : loggedOut;

  return (
    <nav
      className={
        isAuthenticated
          ? "dash-navigation-links-container"
          : "nav-links-container"
      }
    >
      {navigationLinks.map((item) => (
        <NavLink
          className={isAuthenticated ? "nav-link" : "navLink-style"}
          to={item.route}
          style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        >
          <DmdNavIcons source={item.iconName} themeType={item.iconType} />
          {item.title}
        </NavLink>
      ))}

      {isAuthenticated && <button onClick={handleLogout}>logout</button>}
      <SuccessMessage success={success} />
    </nav>
  );
}

{
  /* <nav className={"dash-navigation-links-container"}>
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
       {isAuthenticated && <button onClick={handleLogout}>logout</button>}
        <SuccessMessage success={success} /> */
}
