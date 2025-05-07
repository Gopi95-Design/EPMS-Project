import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../Styles/DeleteEmployee.css';
import logo from '../Images/logo.png';

function DeleteEmployee() {
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

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:4000/Register/delete-employee/${id}`);
            navigate("/list");
        } catch (error) {
            console.error("Delete error:", error);
            alert("Failed to delete employee");
        }
    };

    return (
        <div className="delete-employee-container">
            {/* Navigation Bar */}
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

            {/* Main Content */}
            <div className="delete-form-container">
                <form onSubmit={handleDelete} className="delete-form">
                    <h2>Employee Deletion</h2>
                    <p className="warning-message">
                    Are you sure you want to delete this employee?
                    </p>
                    
                    <div className="employee-details">
                        {Object.entries(employee).map(([key, value]) => (
                            <div className="detail-row" key={key}>
                                <label>
                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:
                                </label>
                                <div className="detail-value">{value}</div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="action-buttons">
                        <button type="button" className="cancel-btn" onClick={() => navigate("/list")}>
                            Cancel
                        </button>
                        <button type="submit" className="delete-btn">
                            Confirm & Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteEmployee;