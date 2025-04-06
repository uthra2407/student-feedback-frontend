import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (example: remove auth token)
    localStorage.removeItem('authToken');
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-container">
          <h1>Welcome to Your Dashboard</h1>
          <p>Streamline your feedback process effortlessly</p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <div className="dashboard-content">
        <nav className="dashboard-nav">
          <ul>
            <li>
              <Link to="/feedback-form" className="dashboard-link">
                <i className="fas fa-edit"></i> Fill Feedback Form
              </Link>
            </li>
            <li>
              <Link to="/view-feedback" className="dashboard-link">
                <i className="fas fa-list"></i> View Submitted Feedback
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <footer className="dashboard-footer">
        <p>&copy; {new Date().getFullYear()} Student Feedback System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;
