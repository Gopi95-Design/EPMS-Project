import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/EmployeeList.css';
import logo from '../Images/logo.png';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:4000/Register/list');
        setEmployees(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="employee-app">
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo" />
          <span>Employee Profile Management System</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/register">Registration</Link>
          <Link to="/list" className="active">Employee List</Link>
          <div className="dropdown">
            <button className="dropdown-btn">Actions</button>
            <div className="dropdown-content">
              <Link to="/update/:id">Update Employee</Link>
              <Link to="/delete/:id">Delete Employee</Link>
            </div>
          </div>
          <Link to="/logout">Logout</Link>
        </div>
      </nav>

      <main className="employee-container">
        <h2>Employee Directory</h2>
        
        <div className="employee-table-container">
          <table className="employee-table">
            <thead>
              <tr>
                <th>S.no</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Job Role</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={employee._id}>
                  <td>{index + 1}</td>
                  <td>{employee.empid}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.jobrole}</td>
                  <td>{employee.mobileno}</td>
                  <td>{employee.email}</td>
                  <td className="actions">
                    <Link to={`/update/${employee._id}`} className="btn edit-btn">
                      Edit
                    </Link>
                    <Link to={`/delete/${employee._id}`} className="btn delete-btn">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default EmployeeList;