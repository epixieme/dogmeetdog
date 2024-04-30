import React, { useState } from "react";
import { useApolloClient } from "@apollo/client";
import LoginForm from "features/Auth/LoginForm/components/LoginForm";
import { ErrorMessage, Loader } from "@shared";
import "../styles/loginPage.css";
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

  return (
    <div className="login-container">
      {loadingMessage && !errorMessage && <Loader loading={loadingMessage} />}

      <LoginForm
        setErrorMsg={notify}
        setLoader={setLoadingMessage}
        setToken={setToken}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </div>
  );
}
