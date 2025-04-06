import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import "./LandingPage.css"; 
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
