import React from "react";
import '../Styles/Logout.css';
import logo from '../Images/logo.png';

function Logout() {
    return (
        <div className="container-fluid p-0 logout-page">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-blue px-3">
                <a href="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="logo" className="logo me-2" />
                    Employee Profile Management System
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
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="/home" className="nav-link text-white">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/register" className="nav-link text-white">Registration</a>
                        </li>
                        <li className="nav-item">
                            <a href="/list" className="nav-link text-white">Employee List</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-white"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Actions
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/update/:id">Update Employee</a></li>
                                <li><a className="dropdown-item" href="/delete/:id">Delete Employee</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="/logout" className="nav-link text-warning fw-bold">Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Logout Confirmation */}
            <div className="form-wrapper d-flex justify-content-center align-items-center">
                <form className="logout-form text-center">
                    <label className="logout-label mb-4">Are you sure you want to logout?</label>
                    <div className="button-group">
                        <a className="btn logout-btn" href="/">Logout</a>
                        <a className="btn cancel-btn" href="/home">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Logout;
