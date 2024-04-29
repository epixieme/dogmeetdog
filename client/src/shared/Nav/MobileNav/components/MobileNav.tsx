import { NavLink } from "react-router-dom";
import "../styles/mobileNav.css";
interface Props {
  activeStyles: {};
  inactiveStyles: {};
}

export default function MobileNav({ activeStyles, inactiveStyles }: Props) {
  return (
    <>
      <nav className="nav-links-mobile-container">
        <div className="nav-links">
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
        </div>
      </nav>
    </>
  );
}
