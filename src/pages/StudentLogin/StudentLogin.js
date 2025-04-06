import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StudentLogin.css"; // Ensure this CSS file exists

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    console.log("🔍 Sending Login Request:", { email, password });
  
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("🔍 API Response:", data);
  
      if (response.ok) {
        localStorage.setItem('student_id', data.student_id); // Store student ID
        localStorage.setItem('access', data.access_token); // Store access token
        console.log('✅ Access token stored successfully!');
        navigate('/student-dashboard');
      } else {
        setError(data.error || "Invalid credentials, try again.");
      }
    } catch (err) {
      console.error("Server error:", err);
      setError("Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to="/student-register">Register here</Link>
      </div>
    </div>
  );
};

export default StudentLogin;
