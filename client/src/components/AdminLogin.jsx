import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminLogin.css";
import logo from "../Images/logo.png";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://epms-project-1.onrender.com/adminlogin", { email, password })
            .then((result) => {
                console.log(result.data);
                if (result.data === "success") {
                    alert("Login Successfully");
                    navigate("/home");
                } else {
                    alert("Invalid credentials");
                }
            })
            .catch((err) => console.error("Login Error:", err));
    };

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                <a href="/" className="nav-linkk">
                    <img className="logo" src={logo} alt="Logo" /> Employee Profile Management System
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="/admin" className="nav-link text-dark">
                                Admin Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-link text-dark">
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="login-box p-5">
                <h2>Admin Login</h2>
                <form className="admin p-2" onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Email</label>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
