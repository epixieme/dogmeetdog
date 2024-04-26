import { NavLink } from "react-router-dom";
import "./mobileNav.css";
interface Props {
  activeStyles: {};
  inactiveStyles: {};
  onClick: () => void;
}

export default function MobileNav({
  activeStyles,
  inactiveStyles,
  onClick,
}: Props) {
  return (
    <>
      <nav className="nav-links-mobile-container">
        <div className="nav-links">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyItems: "flex-start",
              paddingTop: 20,
              paddingLeft: 30,
            }}
            onClick={onClick}
          >
            X
          </div>
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
          {/* <NavLink
              to="/dogs"
              style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
            >
              Our Dogs
            </NavLink> */}
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
