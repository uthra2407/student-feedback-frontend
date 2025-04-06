import axios from 'axios';

const API_BASE_URL = "http://localhost:8000/api";

export const loginStudent = (email, password) => {
    return axios.post(`${API_BASE_URL}/login/`, { email, password });
};
