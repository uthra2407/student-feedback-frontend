import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "./SentimentAnalysis.css";

const CategoryWise = () => {
  const [categorySentiment, setCategorySentiment] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategorySentiment = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/category-wise-sentiment/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setCategorySentiment(response.data);
      } catch (err) {
        setError("Error fetching category sentiment data.");
      }
    };

    fetchCategorySentiment();
  }, []);

  const getCategoryChartData = (categoryData) => ({
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Category Sentiment",
        data: [categoryData.positive, categoryData.neutral, categoryData.negative],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
      },
    ],
  });

  return (
    <div className="sentiment-analysis">
      <h1 style={{ color: "#3f51b5", textAlign: "center" }}>
        Category-Wise Sentiment Analysis
      </h1>

      {error && <p className="error-message">{error}</p>}

      <div 
        className="category-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          padding: "20px",
          justifyContent: "center"
        }}
      >
        {Object.entries(categorySentiment).map(([category, data], index) => (
          <div
            key={index}
            className="category-section"
            style={{
              width: "100%",
              backgroundColor: "#f5f5f5",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              padding: "30px",
            }}
          >
            <h3 style={{ color: "black", textAlign: "center", marginBottom: "20px" }}>
              {category}
            </h3>

            <div 
              className="chart-row"
              style={{
                display: "flex",
                gap: "40px",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <div
                className="pie-chart"
                style={{ width: "400px", height: "400px" }}
              >
                <Pie data={getCategoryChartData(data)} />
              </div>

              <div
                className="bar-chart"
                style={{ width: "400px", height: "400px" }}
              >
                <Bar data={getCategoryChartData(data)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryWise;
