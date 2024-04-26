import { NavLink } from "react-router-dom";
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
    </nav>
  );
}
