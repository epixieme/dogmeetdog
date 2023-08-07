import { Link, NavLink } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
// import PetsIcon from '@mui/icons-material/Pets';
// import Box from '@mui/material/Box';
// import { faPaw } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Login_Header() {
  const activeStyles = {
    textDecoration: "underline",
    color:"white"
  };

  const screenWidth = useWindowWidth();

  return (
    <header className="">
      
      <nav>
      <Link to="/login">Dashboard</Link>
      <Link to="/login/reviews">Reviews</Link>
      </nav>
    </header>
  );
}
