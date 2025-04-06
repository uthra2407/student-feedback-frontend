import React from "react";
import logo from "../../assets/images/logo3.jpeg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <img src={logo} alt="Website Logo" className="logo" />Student Feedback Portal</div>
      <nav className="nav">
        <a href="#home">Home</a>
            <a href="/student-login">Student Login</a>
            <a href="/institution-login">Institution Login</a>
      </nav>
    </header>
  );
};

export default Header;
