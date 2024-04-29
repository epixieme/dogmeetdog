import { NavLink } from "react-router-dom";
import "../styles/webNav.css";
interface Props {
  activeStyles: {};
  inactiveStyles: {};
}
export default function WebNav({ activeStyles, inactiveStyles }: Props) {
  return (
    <nav className="nav-links-container">
      <NavLink
        to="/meetdogs"
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Meet the Dogs
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Login
      </NavLink>
    </nav>
  );
}
