import axios from 'axios';

const API_URL = "http://localhost:8000/api/";  // Django backend URL

export const fetchFeedback = async () => {
    try {
        const response = await axios.get(`${API_URL}feedback/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching feedback:", error);
        return [];
    }
};

export const submitFeedback = async (feedbackData) => {
    try {
        const response = await axios.post(`${API_URL}feedback/add/`, feedbackData);
        return response.data;
    } catch (error) {
        console.error("Error submitting feedback:", error);
        return { error: "Failed to submit feedback" };
    }
};
