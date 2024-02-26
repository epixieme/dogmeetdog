import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./state/authSlice";
import AUTH from "graphql/mutations/AUTH";
import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import LoginForm from "features/LoginForm";
import { ErrorMessage } from "@shared";

export default function Login() {
  // if (result.loading)  {
  //   return <div>loading...</div>
  // }
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState(null);
  const [token, setToken] = useState(null);
  // console.log(token)

  const notify = (message: React.SetStateAction<null>) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  const logout = () => {
    setToken(null);
    localStorage.clear();
    client.resetStore();
  };
  return (
    <>
      {/* <ErrorMessage error={"error error error test"} /> */}
      <LoginForm setError={notify} setToken={() => token} />
    </>
  );
}
