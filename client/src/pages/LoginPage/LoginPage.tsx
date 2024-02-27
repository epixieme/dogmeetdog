import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import LoginForm from "features/auth/LoginForm/components/LoginForm";
import { ErrorMessage } from "@shared";

export default function LoginPage() {
  
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState(null);
  const [token, setToken] = useState(null);
  
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
      {errorMessage && <ErrorMessage error={errorMessage} />}
      <LoginForm setError={notify} setToken={() => token} />
    </>
  );
}
