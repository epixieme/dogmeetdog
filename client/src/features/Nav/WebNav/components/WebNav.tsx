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

const loggedOut = [
  {
    route: "/meetdogs",
    iconName: "Pets",
    iconType: "filled",
    title: "Meet the Dogs",
    key: "1",
  },
  {
    route: "/about",
    iconName: "Info",
    iconType: "filled",
    title: "About",
    key: "2",
  },
  {
    route: "/questions",
    iconName: "AccountBox",
    iconType: "filled",
    title: "sign-up",
    key: "3",
  },
  {
    route: "/login",
    iconName: "AccountBox",
    iconType: "filled",
    title: "Login",
    key: "4",
  },
];

const loggedIn = [
  {
    route: "/dashboard",
    iconName: "Home",
    iconType: "filled",
    title: "Dashboard",
    key: "1",
  },
  {
    route: "/manageaccount",
    iconName: "ManageAccounts",
    iconType: "filled",
    title: "Manage Account",
    key: "2",
  },
  {
    route: "/nearby",
    iconName: "Notifications",
    iconType: "filled",
    title: "Nearby",
    key: "4",
  },
  {
    route: "/messages",
    iconName: "Forum",
    iconType: "filled",
    title: "Messages",
    key: "5",
  },
];
type AllowedIconNames = "Home" | "ManageAccounts" | "Favorite" | "Notifications" | "Forum" | "AccountBox" | "Info" | "Pets";

type AllowedThemeTypes = "rounded" | "filled" | "outlined";

export default function WebNav({ activeStyles, inactiveStyles }: Props) {
  const navigate = useNavigate();
  const client = useApolloClient();
  const dispatch = useDispatch();

  const { success, error } = useSelector((state: RootState) => state.NotificationMessage);

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => {
        dispatch(setSuccess(null));
      }, 4000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [success]);

  const handleLogout = async () => {
    await dispatch(logout());
    // Remove token from localStorage
    localStorage.removeItem("dogUser-user-token");
    // Reset the Apollo Client store after logout
    await client.resetStore();
    // Navigate to the home page
    navigate("/");
  };

  const navigationLinks = isAuthenticated ? loggedIn : loggedOut;

  // const validatedNavLinks = navigationlinks.map((icon) => {
  //   if (['Home', 'ManageAccounts', 'Favorite', 'Notifications', 'Forum', 'AccountBox', 'Info', 'Pets'].includes(icon.iconName)) {
  //     return icon; // Valid icon, include it
  //   } else {
  //     return { ...icon, iconName: 'Home' }; // Invalid icon, set default
  //   }
  // });

  return (
    <nav className={isAuthenticated ? "dash-navigation-links-container" : "nav-links-container"}>
      {navigationLinks.map((link, index) => (
        <NavLink key={link.key} className={isAuthenticated ? "nav-link-style-logged-in" : "navLink-style"} to={link.route} style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}>
          <DmdNavIcons key={link?.key} source={link?.iconName as AllowedIconNames} themeType={link?.iconType as AllowedThemeTypes} />
          {link.title}
        </NavLink>
      ))}

      {isAuthenticated && <button onClick={handleLogout}>logout</button>}
      <SuccessMessage success={success} />
    </nav>
  );
}
