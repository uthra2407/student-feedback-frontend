import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./SentimentAnalysis.css";

const InstitutionOverview = () => {
  const [sentimentData, setSentimentData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchInstitutionData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/institution-overall-sentiment/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const data = response.data;

        const chartData = {
          labels: ["Positive", "Neutral", "Negative"],
          datasets: [
            {
              label: "Overall Sentiment",
              data: [data.positive, data.neutral, data.negative],
              backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
            },
          ],
        };

        setSentimentData(chartData);
      } catch (err) {
        setError("Error fetching overall sentiment data.");
      }
    };

    fetchInstitutionData();
  }, []);

  return (
    <div className="sentiment-analysis">
      <h1>Institution Sentiment Overview</h1>

      {error && <p className="error-message">{error}</p>}

      {sentimentData && (
        <div className="sentiment-charts">
          <div className="chart-container">
            <h3>Overall Sentiment Pie Chart</h3>
            <Pie data={sentimentData} />
          </div>

          <div className="chart-container">
            <h3>Overall Sentiment Bar Graph</h3>
            <Bar data={sentimentData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionOverview;
