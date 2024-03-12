import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import LoginForm from "features/auth/LoginForm/components/LoginForm";
import { ErrorMessage, Loader } from "@shared";
import "./loginPage.css";
export default function LoginPage() {
  const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [token, setToken] = useState(null);

  const notify = (message: React.SetStateAction<null>) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 4000);
  };

  // const logout = () => {
  //   setToken(null);
  //   localStorage.clear();
  //   client.resetStore();
  // };

  return (
    <div className="login-container">
      {loadingMessage && !errorMessage && <Loader loading={loadingMessage} />}

      <LoginForm
        setErrorMsg={notify}
        setToken={() => token}
        setLoader={setLoadingMessage}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </div>
  );
}
