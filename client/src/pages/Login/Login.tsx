import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./state/authSlice";
import AUTH from "graphql/mutations/AUTH";
import { useMutation, useQuery } from "@apollo/client";
import CURRENT_USER from "graphql/queries/CURRENT_USER";

export default function Login({ setError, setToken }) {
 
  const dispatch = useDispatch();
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });


console.log(loginFormData)
// const [loginUser] = useMutation(AUTH);

const { loading, error, data } = useQuery(CURRENT_USER);



  const [ loginUser, result ] = useMutation(AUTH, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }
  })


useEffect(() => {
    if ( result.data ) {
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('phonenumbers-user-token', token)
    }
  }, [result.data])

  async function handleLogin(event:{
    preventDefault(): unknown; target: { value: string; }; 
}) {
    event.preventDefault()
    const {email, password} = loginFormData

    try {
        login({ variables: { email, password } })

    //   localStorage.setItem('token', response.data.login);
    } catch (error) {
      console.error(error);
    }
    }

  function handleEmailChange(event:{
    preventDefault(): unknown; target: { value: string; }; 
}) {
    event.preventDefault();
    const newLoginFormData = { ...loginFormData };
    newLoginFormData.email = event?.target.value;
    setLoginFormData(newLoginFormData);
  }

  function handlePasswordChange(event: { target: { value: string; }; }) {
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
