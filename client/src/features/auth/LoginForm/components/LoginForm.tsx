import { useMutation, useQuery } from "@apollo/client";
import AUTH from "graphql/mutations/AUTH";
import CURRENT_USER from "graphql/queries/CURRENT_USER";
import { login } from "features/auth/state/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useNavigate } from "react-router-dom";

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

  const [loginUser, { data, loading, error }] = useMutation(AUTH, {
    // onError: (error) => {
    //   setError(error.graphQLErrors[0].message);
    // },
  });

  const { email, password } = loginFormData;

  useEffect(() => {

    // result from loginUser when handleLogin is triggered and graphql mutation is called
    if (data) {

        // get token
      const token = data.loginUser.value;

      // set token to state and local storage
      setToken(token);
      
      localStorage.setItem("dogUser-user-token", token);
      //then set isAuthenticated to true to show the internal authorised screens and then navigate to dashboard
      dispatch(login({ email, password }));
      navigate("/dashboard");
    }
  }, [data]);

  async function handleLogin(event: {
    preventDefault(): unknown;
    target: { value: string };
  }) {
    event.preventDefault();
    try {
        //graphql mutation credentials to get token value
      loginUser({
        variables: {
          email,
          password,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.graphQLErrors[0].message}`;
  

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
