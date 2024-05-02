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
  // const client = useApolloClient();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (errorMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage(null);
      }, 4000);

      return () => clearTimeout(timeout); // Cleanup timeout if component unmounts or errorMessage changes
    }

    if (successMessage) {
      console.log("success", successMessage);
      const timeout = setTimeout(() => {
        dispatch(setSuccess(null));
        // setSuccessMessage(null);
      }, 4000);
    }
  }, [errorMessage]); // This effect depends on errorMessage

  const failure = (message: React.SetStateAction<null>) => {
    setErrorMessage(message);

    setTimeout(() => {
      setErrorMessage(null);
    }, 4000);
    // return () => clearTimeout(timeout);
  };

  const success = (message: React.SetStateAction<null>) => {
    // setSuccessMessage(message);
    dispatch(setSuccess(null));

    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
    // return () => clearTimeout(timeout);
  };

  return (
    <div className="login-container">
      {loadingMessage && !errorMessage && <Loader loading={loadingMessage} />}

      <LoginForm
        setErrorMsg={failure}
        setLoader={setLoadingMessage}
        setToken={setToken}
        setSuccessMsg={success}
      />
      {errorMessage && <ErrorMessage error={errorMessage} />}
    </div>
  );
}
