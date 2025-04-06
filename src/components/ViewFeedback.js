import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewFeedback.css';

const ViewFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Fetch feedback for the logged-in student
    const fetchFeedback = async () => {
      try {
        const accessToken = localStorage.getItem('access');
        if (!accessToken) {
          console.warn('No access token found in local storage. Cannot fetch feedback.');
          return;
        }
        const response = await axios.get('http://localhost:8000/api/student/view-feedback/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.data && response.data.length > 0) {
          setFeedbackList(response.data);
        } else {
          console.log('No feedback data received from the server.');
        }
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div className="view-feedback">
      <h2>Student Feedback</h2>
      {feedbackList.length > 0 ? (
        <ul className="feedback-list">
          {feedbackList.map((feedback, index) => (
            <li key={index}>
              <p><strong>Teaching:</strong> {feedback.teaching}</p>
              <p><strong>Course Content:</strong> {feedback.course_content}</p>
              <p><strong>Examination:</strong> {feedback.examination}</p>
              <p><strong>Lab Work:</strong> {feedback.lab_work}</p>
              <p><strong>Library Facilities:</strong> {feedback.library_facilities}</p>
              <p><strong>Extracurricular Activities:</strong> {feedback.extracurricular}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default ViewFeedback;
