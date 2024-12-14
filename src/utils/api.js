import axios from 'axios';

const API_BASE_URL = 'http://localhost:3030';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createUser = (userData) => api.post('/create_new_user_info', userData);
export const getAllUsers = () => api.get('/get_all_user_info');

// Add more API calls as needed

export default api;
