import { useMutation, useQuery } from "@apollo/client";
import AUTH from "graphql/mutations/AUTH";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import { login } from "features/auth/state/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import { ErrorMessage, Loader } from "@shared";
import "./loginform.css";
interface Props {
  setToken: (args: any) => void;
  setErrorMsg: (args: any) => void;
  setLoader: (args: any) => void;
}

export default function LoginForm({ setErrorMsg, setToken, setLoader }: Props) {
  const [loginUser, { data, loading, error }] = useMutation(AUTH);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = loginFormData;

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
      navigate("/dashboard");
    }
  }, [data, dispatch, email, password, navigate, setToken]);

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
          Log in
        </button>
      </form>
    </div>
  );
}
