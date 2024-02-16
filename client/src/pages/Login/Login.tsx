import React from "react"
import { useDispatch } from 'react-redux';
import { login } from "./state/authSlice";
export default function Login() {
    const dispatch = useDispatch();
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })


function handleEmailChange(event){
    event.preventDefault();
    const newLoginFormData = {...loginFormData}
    newLoginFormData.email = event?.target.value
    setLoginFormData(newLoginFormData)

}

function handlePasswordChange(event){

    const newLoginFormData = {...loginFormData}

    newLoginFormData.password = event?.target.value

    setLoginFormData(newLoginFormData)

}

function handleLogin(){
    // user data here 

      // if ( loginFormData === email and password in db)
    // then dispatch login
    dispatch(login({username: 'user123', email: 'user@example.com'}));
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
                <button type='submit'>Log in</button>
            </form>
        </div>
    )

}