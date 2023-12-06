import { Link, NavLink } from "react-router-dom";
// import useWindowWidth from "../../../../hooks/useWindowWidth";
import "./dashboardHeader.css";
import React from "react";
// import PetsIcon from '@mui/icons-material/Pets';
// import Box from '@mui/material/Box';
// import { faPaw } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashboardHeader() {
  const activeStyles = {
    textDecoration: "underline",
    color: "white",
  };

  // const screenWidth = useWindowWidth();

  return (
    <header className="nav">
      <nav className="nav-links">
        <Link to="/login">Dashboard</Link>
        <Link to="/login/reviews">Reviews</Link>
      </nav>
    </header>
  );
}
