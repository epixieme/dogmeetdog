import React, { useEffect, useState } from "react";
// import { useApolloClient } from "@apollo/client";
import LoginForm from "features/Auth/LoginForm/components/LoginForm";
import { ErrorMessage, Loader } from "@shared";
import "../styles/loginPage.css";
import { useDispatch } from "react-redux";
import {
  setSuccess,
  setError,
} from "../../../../shared/state/NotificationMessageSlice";
export default function LoginPage() {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [token, setToken] = useState(null);

  const failure = (message: React.SetStateAction<null>) => {
    setErrorMessage(message);
    const timeout = setTimeout(() => {
      setErrorMessage(null);
    }, 4000);
    return () => clearTimeout(timeout);
  };

  return (
    <div className="login-container">
      {loadingMessage && !errorMessage && <Loader loading={loadingMessage} />}

      <LoginForm
        setErrorMsg={failure}
        setLoader={setLoadingMessage}
        setToken={setToken}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </div>
  );
}
