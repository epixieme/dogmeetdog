import { useMutation } from "@apollo/client";
import AUTH from "graphql/mutations/AUTH";
import { login } from "features/Auth/state/authSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/loginform.css";
import { RootState } from "store/types";

interface Props {
  setErrorMsg: (args: any) => void;
  setLoader: (args: any) => void;
  setToken: (args: any) => void;
}

export default function LoginForm({ setErrorMsg, setLoader, setToken }: Props) {
  const [loginUser, { data, loading, error }] = useMutation(
    AUTH,

    {
      onError: (error) => {
        setErrorMsg(error.graphQLErrors[0].message);
      },
    }
  );

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  // const [ login, result ] = useMutation(LOGIN, {
  //   onError: (error) => {
  //     setError(error.graphQLErrors[0].message)
  //   }
  // })

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const token = data?.loginUser.value;
  const { email, password } = loginFormData;

  useEffect(() => {
    if (error) {
      const graphQLErrors = error.graphQLErrors;

      // Check for specific error codes and handle them
      if (graphQLErrors && graphQLErrors.length > 0) {
        const firstError = graphQLErrors[0];
        // console.log(errorCode);
        const errorCode = firstError.extensions?.code;
        console.log(errorCode);
        const errorMessage = firstError.message;
        console.log(errorMessage);

        if (errorCode === "BAD_USER_INPUT") {
          setErrorMsg(errorMessage); // Update state, but do not return JSX
        } else {
          setErrorMsg("An unexpected error occurred.");
        }
      }
    }
  }, [error, setErrorMsg]); // Ensure dependencies are correctly defined

  useEffect(() => {
    if (data) {
      setToken(token);
      localStorage.setItem("dogUser-user-token", token);
      dispatch(login({ email, password }));
      localStorage.setItem("isLoggedIn", isAuthenticated.toString());
      navigate("/dashboard", { replace: true });
    }
  }, [data, dispatch, email, password, navigate, setToken, isAuthenticated]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await loginUser({
        variables: {
          email,
          password,
        },
      });
    } catch (error) {
      console.log(error);
      setErrorMsg("Login failed. Please try again.");
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginFormData({ ...loginFormData, email: event.target.value });
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginFormData({ ...loginFormData, password: event.target.value });
  }

  return (
    <div className="login-container">
      <div className="login-form-outer-container">
        <h1>Sign in to your account</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            className="login-input"
            name="email"
            onChange={handleEmailChange}
            type="email"
            placeholder="Email address"
            value={email}
          />
          <input
            className="login-input"
            name="password"
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
            value={password}
          />

          <button type="submit" disabled={loading}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
