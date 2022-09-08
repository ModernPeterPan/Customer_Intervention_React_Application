import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    // console.log(props)
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [token, setToken] = useState();
        const history = useNavigate();
        // useEffect(() => {
        //     if (localStorage.getItem('user-info')) {
        //         history.push("/")
        //     }
        // }, [])

        const onClick = (e) => {
            e.preventDefault();
            login();
            history("/", {state: {token: token}})
        }

        const login = () => {
            console.log(email, password);
            let item = { email, password };
            var x = "";
            axios.post(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .then(result => {
                    console.log("#########")
                    x = result.data["access_token"]
                    console.log("result: " + x)
                    console.log("token: " + token)
                    localStorage.setItem("user-info", JSON.stringify(x))
                    // history("/");

                }).catch((error) => {
                    console.log(error)
                })
                setToken(x)
        }

    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                {/* ERROR! */}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={(e) => onClick(e)}>Log In</button>
            </div>
        </form>
    )
}


export default LoginForm;