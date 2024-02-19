import { Button } from "@shared";
import AccountModal from "pages/LoggedIn/AccountModal";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function DashboardHeader() {
  // const activeStyles = {
  //   textDecoration: "underline",
  //   color: "white",
  // };


  return (
    <header className="nav-menu-container">
      <nav className={ "nav-links-container"}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/myaccount">My Account</Link>
       
        {/* // pop up modal and then logout and users details */}
      </nav>
    </header>
  );
}
