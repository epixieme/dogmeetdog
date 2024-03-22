import { useMutation, useQuery } from "@apollo/client";
import AUTH from "graphql/mutations/AUTH";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import { login } from "features/auth/state/authSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, ErrorMessage, Loader } from "@shared";
import "./loginform.css";
import { RootState } from "store/store";
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

  // const [token, setToken] = useState(null);
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
      navigate("/dashboard");
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

        {/* <Button btnText={"Login"} /> */}
        <button type="submit" disabled={loading}>
          Log in
        </button>
      </form>
    </div>
  );
}
