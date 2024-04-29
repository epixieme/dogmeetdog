import { useMutation } from "@apollo/client";
import AUTH from "graphql/mutations/AUTH";
import { login } from "features/auth/state/authSlice";
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
  const [loginUser, { data, loading, error }] = useMutation(AUTH);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;
  // needs to be in a useEffect or will get a render error
  useEffect(() => {
    if (loading) setLoader("Submitting...");
    if (error) setErrorMsg(`Submission error! ${error.message}`);
  }, [loading, error, setLoader, setErrorMsg]);

  useEffect(() => {
    if (data) {
      const token = data.loginUser.value;
      setToken(token);
      localStorage.setItem("dogUser-user-token", token);
      dispatch(login({ email, password }));
      localStorage.setItem("isLoggedIn", isAuthenticated.toString());
      navigate("/dashboard", { replace: true });
    }
  }, [data, dispatch, email, password, navigate, setToken, isAuthenticated]);

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

    try {
      await loginUser({
        variables: {
          email,
          password,
        },
      });
    } catch (error) {
      console.log(error);
      setErrorMsg("There was an error, please try again.");
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
      <h1>Sign in to your account</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input
          name="email"
          onChange={handleEmailChange}
          type="email"
          placeholder="Email address"
          value={email}
        />
        <input
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
  );
}
