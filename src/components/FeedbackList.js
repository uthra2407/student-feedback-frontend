import React, { useEffect, useState } from "react";
import { fetchFeedback } from "../services/api";

const FeedbackList = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        async function getFeedback() {
            const data = await fetchFeedback();
            setFeedback(data);
        }
        getFeedback();
    }, []);

    return (
        <div>
            <h2>Feedback List</h2>
            <ul>
                {feedback.length > 0 ? (
                    feedback.map((item, index) => (
                        <li key={index}>{item.feedback_text} - {item.sentiment}</li>
                    ))
                ) : (
                    <p>No feedback available</p>
                )}
            </ul>
        </div>
    );
};

export default FeedbackList;
