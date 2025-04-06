// src/components/InstitutionDashboard.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./InstitutionDashboard.css";

const InstitutionDashboard = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    };

    return (
        <div className="institution-dashboard">
            <header className="dashboard-header">
                <h1>Institution Dashboard</h1>
                <p>Analyze and manage student feedback effectively</p>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </header>

            <div className="dashboard-content">
                <nav className="dashboard-nav">
                    <ul>
                        <li>
                            <Link to="/view-feedback" className="dashboard-link">
                                <i className="fas fa-folder-open"></i> View Feedback by Category
                            </Link>
                        </li>
                        <li>
                            <Link to="/sentiment-analysis" className="dashboard-link">
                                <i className="fas fa-chart-pie"></i> Sentiment Analysis
                            </Link>
                        </li>
                        <li>
                            <Link to="/student-sentiment" className="dashboard-link">
                                <i className="fas fa-user-graduate"></i> Student Sentiment Analysis
                            </Link>
                        </li>
                        <li>
                            <Link to="/category-wise" className="dashboard-link">
                                <i className="fas fa-user-graduate"></i> Category Wise Sentiment Analysis
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <footer className="dashboard-footer">
                <p>&copy; {new Date().getFullYear()} Institution Feedback System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default InstitutionDashboard;
