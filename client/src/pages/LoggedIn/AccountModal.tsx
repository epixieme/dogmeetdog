import { useDispatch } from "react-redux";
import { logout } from "features/auth/state/authSlice";
import { useState } from "react";
import { useApolloClient } from "@apollo/client";

export default function AccountModal() {
  const client = useApolloClient();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("dogUser-user-token");
    client.resetStore(); // Reset the Apollo Client store after logout
  };

  return (
    <>
      <div className="modal">
        {/* <Profile></Profile> */}
        {/* <Dogs></Dogs> */}
        {/* Matches */}
        {/* <favourites></favourites> */}
        {/* <Messages/> */}
        {/* <Events></Events>
      <FAQs></FAQs> */}
        <h3>Edit profile</h3>
        <h3>Dashboard</h3>
        <h3>Notification</h3>
        <h3>Messages</h3>
        <h3>Matches</h3>
        <h3>settings</h3>
        <h3>help</h3>
        <button onClick={handleLogout}>logout</button>

        {/* https://dribbble.com/shots/18221203-Cherish-Web-App-Dashboard-Design */}
      </div>
    </>
  );
}
