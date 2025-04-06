import React, { useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./SentimentAnalysis.css";

const StudentSentiment = () => {
  const [formData, setFormData] = useState({
    student_id: "",
    institution_name: "",
  });

  const [sentimentData, setSentimentData] = useState(null);
  const [error, setError] = useState("");

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle API Request
  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setSentimentData(null);

    console.log("Request Data Sent to API:", formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/student-sentiment-distribution/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response Data:", response.data);

      const data = response.data.sentiment_distribution;

      const chartData = {
        labels: ["Positive", "Neutral", "Negative"],
        datasets: [
          {
            label: "Student Sentiment Distribution",
            data: [data.positive, data.neutral, data.negative],
            backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
          },
        ],
      };

      setSentimentData(chartData);
    } catch (err) {
      console.error("Error Response:", err.response?.data);
      setError(
        err.response?.data?.error || "Error fetching student sentiment data."
      );
    }
  };

  return (
    <div className="sentiment-analysis">
      <h1 style={{ color: "#3f51b5", textAlign: "center" }}>Student-wise Sentiment Analysis</h1>

      <form onSubmit={handleSearch} className="feedback-form">
        <input
          type="text"
          name="student_id"
          placeholder="Enter Student ID"
          value={formData.student_id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="institution_name"
          placeholder="Enter Institution Name"
          value={formData.institution_name}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {sentimentData && (
        <div className="sentiment-charts">
          <div
            className="chart-container"
            style={{ width: "300px", height: "300px", margin: "0 auto" }}
          >
            <h3>Student Sentiment Pie Chart</h3>
            <Pie data={sentimentData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentSentiment;
