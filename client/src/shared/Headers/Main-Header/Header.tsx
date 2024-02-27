import { Link, NavLink } from "react-router-dom";
// @ts-ignore
import useWindowWidth  from '../../../hooks/useWindowWidth'

import './header.css'

export default function Header() {
  const activeStyles = {
    textDecoration: "underline",
    color: "white",
  };

  const inactiveStyles = {
    color: "white",
  };

  const screenWidth = useWindowWidth()

  return (
    <header className="nav-menu-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#2C2C2C" points="0,100 100,0 100,100" />
      </svg>

      <Link className="logo" to="/">
        <h1>DogMeetDog</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
        </svg>
        <p>Find the perfect play date for your Dog.</p>
      </Link>

      <nav className={// @ts-ignore 
      screenWidth > 800 ? "nav-links-container" : "hidden"}>
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
          to="/dogs"
          style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        >
          Our Dogs
        </NavLink>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}



