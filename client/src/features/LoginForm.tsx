import { useMutation, useQuery } from "@apollo/client";
import AUTH from "graphql/mutations/AUTH";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import { login } from "pages/Login/state/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Route, useNavigate} from 'react-router-dom';

interface Props {
  setToken: (args: any) => void;
  setError: (args: any) => void;
}

export default function LoginForm({ setError, setToken }: Props) {
    const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const {
    client,
    loading,
    data: currentUser,
  } = useQuery(CURRENT_USER, { fetchPolicy: "network-only" });

  const [loginUser, result] = useMutation(AUTH, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message);
    },
  });

  useEffect(() => {
    if (result.data) {
      console.log(result.data.loginUser.value);
      const token = result.data.loginUser.value;
      setToken(token);
      localStorage.setItem("dogUser-user-token", token);
    }
  }, [result.data]);

  async function handleLogin(event: {
    preventDefault(): unknown;
    target: { value: string };
  }) {
    event.preventDefault();

    const { email, password } = loginFormData;

    try {
      loginUser({
        variables: {
          email,
          password,
        },
      });

      if (currentUser) {
        console.log("user", currentUser);
        dispatch(login({ email, password }));
        navigate('/dashboard')
      }
    } catch (error) {
      console.error(error);
    }
  }

  function handleEmailChange(event: {
    preventDefault(): unknown;
    target: { value: string };
  }) {
    event.preventDefault();
    const newLoginFormData = { ...loginFormData };
    newLoginFormData.email = event?.target.value;
    setLoginFormData(newLoginFormData);
  }

  function handlePasswordChange(event: { target: { value: string } }) {
    const newLoginFormData = { ...loginFormData };
    newLoginFormData.password = event?.target.value;
    setLoginFormData(newLoginFormData);
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
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handlePasswordChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
