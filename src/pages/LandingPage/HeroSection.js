import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Your Voice, Our Growth!</h1>
      <p>
        Empowering students and institutions to build a better tomorrow through
        feedback.
      </p>
      <div className="buttons">
        <a href="/student-login" className="btn btn-primary">Student Login</a>
        <a href="/institution-login" className="btn btn-secondary">Institution Login</a>
      </div>
    </section>
  );
};

export default HeroSection;
