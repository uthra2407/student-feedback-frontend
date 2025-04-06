import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import InstitutionLogin from "./pages/InstitutionLogin/InstitutionLogin";
import StudentRegistration from "./pages/StudentLogin/StudentRegistration";
import InstitutionRegistration from "./pages/InstitutionLogin/InstitutionRegistration";
import StudentDashboard from './components/StudentDashboard';
import FeedbackForm from './components/FeedbackForm';
import ViewFeedback from './components/ViewFeedback';
import InstitutionDashboard from "./components/InstitutionDashboard";
import ViewFeedbackInstitution from "./components/ViewFeedbackInstitution";
import SentimentAnalysis from "./components/SentimentAnalysis";
import StudentSentiment from "./components/StudentSentiment";
import CategoryWiseSentiment from "./components/CategoryWiseSentiment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/institution-login" element={<InstitutionLogin />} />
          <Route path="/student-register" element={<StudentRegistration />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/institution-register" element={<InstitutionRegistration />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
          <Route path="/view-feedback" element={<ViewFeedback />} />
          
          <Route path="/institutiondashboard" element={<InstitutionDashboard />} />
          <Route path="/view-feedback-institution" element={<ViewFeedbackInstitution />} />
          <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
         
        <Route path="/student-sentiment" element={<StudentSentiment />} />
        <Route path="/category-wise" element={<CategoryWiseSentiment />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
