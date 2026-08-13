import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const { login } = useContext(AuthContext); // context
    const [creds, setCreds] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCreds((prev) => ({ ...prev, [name]: value }));
    };

    // LOGIN FUNCTION
    const handleLogin = async () => {
        try {
            const res = await axios.post(
                "http://127.0.0.1:8000/api-token-auth/",
                creds
            );

            const token = res.data.token;

            // Save token
            localStorage.setItem("userToken", token);

            // Attach token globally
            axios.defaults.headers.common[
                "Authorization"
            ] = `Token ${token}`;
            // store user globally
            login(creds.username);

            alert("Login Successful!");

        } catch (err) {
            alert("Invalid Credentials");
            console.log(err.response?.data);
        }
    };

    return (
        // Add component UI / JSX here
        <div>
      <h2>Login</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={handleInputChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
    );
}

export default Login;