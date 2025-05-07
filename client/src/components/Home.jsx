import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import homeImage from '../Images/home.jpg';
import logo from '../Images/logo.png';

function Home() {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo" />
          <span>Employee Profile Management System</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-button">
          <span className="menu-icon"></span>
        </label>
        
        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/home" className="nav-link active">Home</Link>
          <Link to="/register" className="nav-link">Registration</Link>
          <Link to="/list" className="nav-link">Employee List</Link>
          
          {/* Dropdown Menu */}
          <div className="dropdown">
            <button className="dropdown-btn">Actions</button>
            <div className="dropdown-content">
              <Link to="/update/:id" className="dropdown-item">Update Employee</Link>
              <Link to="/delete/:id" className="dropdown-item">Delete Employee</Link>
            </div>
          </div>
          <Link to="/logout" className="nav-link">Logout</Link>
        </div>
      </nav>
      {/* Main Content */}
      <main className="home-content">
        <div className="welcome-card">
          <div className="card-text">
            <h1>Employee Profile Management System</h1>
            <p>
            Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. 
            Yet,communication tactics alone may fall short in the face of multi-generational workforces,
             rising numbers of freelance workers and complex regulations. 
             Technology, whether it’s workforce management software or a human capital management solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.
            </p>
          </div>
          <img src={homeImage} alt="Team collaboration" className="card-image" />
        </div>
      </main>
    </div>
  );
}

export default Home;