import { useQuery } from "@apollo/client";
import { useState } from "react";
import { ErrorMessage, Loader } from "@shared";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import "../styles/dashboard.css";

export default function Dashboard({}: any) {
  const { data, loading, error } = useQuery(CURRENT_USER);

  return (
    <div className="">
      <h1>hello</h1>
      <h1>{data && data.currentUser.name}</h1>
    </div>
  );
}
