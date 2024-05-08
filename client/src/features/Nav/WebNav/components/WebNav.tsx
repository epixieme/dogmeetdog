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
    route: "/login",
    iconName: "AccountBox",
    iconType: "filled",
    title: "Login",
    key: "3",
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
  console.log(navigationLinks);

  return (
    <nav
      className={
        isAuthenticated
          ? "dash-navigation-links-container"
          : "nav-links-container"
      }
    >
      {navigationLinks.map((item, index) => (
        <NavLink
          key={item.key}
          className={
            isAuthenticated ? "nav-link-style-logged-in" : "navLink-style"
          }
          to={item.route}
          style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        >
          <DmdNavIcons
            key={item.key}
            source={item.iconName}
            themeType={item.iconType}
          />
          {item.title}
        </NavLink>
      ))}

      {isAuthenticated && <button onClick={handleLogout}>logout</button>}
      <SuccessMessage success={success} />
    </nav>
  );
}
