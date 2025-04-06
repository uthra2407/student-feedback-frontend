import React, { useState } from "react";
import "./InstitutionLogin.css"; // Add styles for the page
import { Link, useNavigate } from "react-router-dom";

const InstitutionLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes("@") || !email.includes(".")) {
      setError("Invalid email format.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError("");

    try {
      console.log("🚀 Sending login request:", { email, password });

      const response = await fetch("http://localhost:8000/api/institution/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("📥 Received API response:", data);

      if (response.ok) {
        // Store access token and refresh token
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);

        alert("Institution Login Successful!");
        navigate("/institutiondashboard"); // Redirect to the dashboard
      } else {
        setError(data.error || "Invalid credentials, please try again.");
      }
    } catch (err) {
      console.error("❌ Server error:", err);
      setError("Server error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Institution Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
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
          {loading ? <div className="spinner"></div> : "Login"}
        </button>
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to="/institution-register">Register here</Link>
      </div>
    </div>
  );
};

export default InstitutionLogin;
