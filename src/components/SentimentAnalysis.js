import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./SentimentAnalysis.css";

const SentimentAnalysis = () => {
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
      <h1 style={{ color: "#3f51b5", textAlign: "center" }}>
        Feedback Sentiment Overview
      </h1>

      {error && <p className="error-message">{error}</p>}

      {sentimentData && (
        <>
          {/* Pie Chart Section */}
          <div 
            className="sentiment-charts" 
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              width: "100%",
              padding: "20px",
              boxSizing: "border-box"
            }}
          >
            <div 
              className="text-section" 
              style={{
                maxWidth: "40%", 
                textAlign: "left", 
                fontWeight: "bold", 
                fontSize: "20px", 
                color: "black"
              }}
            >
              <h4>Overall Sentiment Analysis</h4>
             
            </div>

            <div 
              className="chart-container" 
              style={{
                width: "350px",
                height: "350px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Pie data={sentimentData} />
            </div>
          </div>

          {/* Bar Chart Section */}
          <div 
            className="sentiment-charts" 
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              width: "100%",
              padding: "20px",
              boxSizing: "border-box"
            }}
          >
            <div 
              className="text-section" 
              style={{
                maxWidth: "40%", 
                textAlign: "left", 
                fontWeight: "bold", 
                fontSize: "20px", 
                color: "black"
              }}
            >
              <h4>Sentiment Distribution Overview</h4>
              
            </div>

            <div 
              className="chart-container" 
              style={{
                width: "350px",
                height: "350px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Bar data={sentimentData} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SentimentAnalysis;
