import { NavLink } from "react-router-dom";
import "../styles/webNav.css";
import DmdNavIcons from "shared/DmdIcons/components/DmdNavIcons";
interface Props {
  activeStyles: {};
  inactiveStyles: {};
}
export default function WebNav({ activeStyles, inactiveStyles }: Props) {
  return (
    <nav className="nav-links-container">
      <NavLink
        className="navLink-style"
        to="/meetdogs"
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        <DmdNavIcons source={"Pets"} themeType={"filled"} />
        Meet the Dogs
      </NavLink>
      <NavLink
        className="navLink-style"
        to="/about"
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        <DmdNavIcons source={"Info"} themeType={"filled"} />
        About
      </NavLink>
      <NavLink
        className="navLink-style"
        to="/login"
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        <DmdNavIcons source={"AccountBox"} themeType={"filled"} />
        Login
      </NavLink>
    </nav>
  );
}
