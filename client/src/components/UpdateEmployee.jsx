import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/Update.css';
import logo from '../Images/logo.png';

function UpdateEmployee() {
    const [employee, setEmployee] = useState({
        empid: "",
        name: "",
        age: "",
        jobrole: "",
        mobileno: "",
        email: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/Register/get-employee/${id}`);
                setEmployee(response.data.data);
            } catch (error) {
                console.error("Error fetching employee:", error);
            }
        };
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4000/Register/main/${id}`, employee);
            navigate("/list");
        } catch (error) {
            console.error("Update error:", error);
        }
    };

    return (
        <div className="update-employee-container">
            <nav className="navbar">
                <a href="/" className="logo-link">
                    <img src={logo} alt="Company Logo" className="logo" />
                    <span>Employee Profile Management System</span>
                </a>
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/register">Registration</a>
                    <a href="/list">Employee List</a>
                    <div className="dropdown">
                        <button className="dropdown-btn">Actions</button>
                        <div className="dropdown-content">
                            <a href={`/update/${id}`}>Update Employee</a>
                            <a href={`/delete/${id}`}>Delete Employee</a>
                        </div>
                    </div>
                    <a href="/logout">Logout</a>
                </div>
            </nav>

            <div className="update-form-container">
                <form onSubmit={handleSubmit} className="update-form">
                    <h2>Update Employee Details</h2>
                    
                    {Object.entries(employee).map(([key, value]) => (
                        <div className="form-group" key={key}>
                            <label>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</label>
                            <input
                                type={key === "mobileno" ? "tel" : key === "email" ? "email" : "text"}
                                name={key}
                                value={value}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}

                    <button type="submit" className="update-btn">
                        Update Employee
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployee;