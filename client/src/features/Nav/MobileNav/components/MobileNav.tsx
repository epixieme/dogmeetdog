import { NavLink } from "react-router-dom";
import "../styles/mobileNav.css";
import DmdNavIcons from "../../../../shared/DmdIcons/components/DmdNavIcons";
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
            className="navLink-style-mobile"
            to="/meetdogs"
            style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
          >
            <DmdNavIcons source={"Pets"} themeType={"filled"} />
            Meet the Dogs
          </NavLink>
          <NavLink
            className="navLink-style-mobile"
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
          >
            <DmdNavIcons source={"Info"} themeType={"filled"} />
            About
          </NavLink>
          <NavLink
            className="navLink-style-mobile"
            to="/login"
            style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
          >
            <DmdNavIcons source={"AccountBox"} themeType={"filled"} />
            Login
          </NavLink>
        </div>
      </nav>
    </>
  );
}
