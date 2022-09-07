import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {
    //         history.push("/")
    //     }
    // }, [])

    function onClick(e) {
        e.preventDefault();
        login();
        // history("/")
    }

    // function GoHome() {
    //     let navigate = useNavigate();
    //     const handleClick = e => {
    //         e.preventDefault();
    //         navigate('/');
    //     }
    //     return <button onClick={handleClick}>Go to Home</button>
    // }

    async function login() {
        console.log(email, password);
        let item = { email, password };
        axios.post(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
            .then(result => {
                console.log("#########")
                console.log(result.data["access_token"])
                localStorage.setItem("user-info", JSON.stringify(result))
                history("/");
            }).catch((error) => {
                console.log(error)
            })

            // let result = axios.post(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
            // .then(res => {
            //     console.log(res)
            // }).catch((error) => {
            //     console.log(error)
            // })
        // let result = await fetch(`https://java-api.codeboxxtest.xyz/authenticate?email=${email}&password=${password}`, {
        //     method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(item)
        // });

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