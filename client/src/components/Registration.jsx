import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../Styles/Register.css';
import logo from '../Images/logo.png';

function Registration() {
    const [formData, setFormData] = useState({
        empid: "",
        name: "",
        age: "",
        jobrole: "",
        mobileno: "",
        email: "",
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://epms-project-1.onrender.com/Register/apply/", formData);
            setFormData({
                empid: "",
                name: "",
                age: "",
                jobrole: "",
                mobileno: "",
                email: "",
            });
            navigate("/list");
        } catch (error) {
            console.error("Registration error:", error);
        }
    };

    return (
        <div className="registration-container">
            <nav className="navbar">
                <a href="/" className="logo-link">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <span>Employee Profile Management System</span>
                </a>
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/register" className="active">Registration</a>
                    <a href="/list">Employee List</a>
                    <div className="dropdown">
                        <button className="dropdown-btn">Actions</button>
                        <div className="dropdown-content">
                            <a href="/update/:id">Update Employee</a>
                            <a href="/delete/:id">Delete Employee</a>
                        </div>
                    </div>
                    <a href="/logout">Logout</a>
                </div>
            </nav>

            <div className="registration-form-container">
                <form onSubmit={handleSubmit} className="registration-form">
                    <h2>Employee Registration</h2>
                    
                    <div className="form-group">
                        <label>Employee ID</label>
                        <input
                            type="text"
                            name="empid"
                            value={formData.empid}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Job Role</label>
                        <input
                            type="text"
                            name="jobrole"
                            value={formData.jobrole}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input
                            type="tel"
                            name="mobileno"
                            value={formData.mobileno}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        Register Employee
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Registration;