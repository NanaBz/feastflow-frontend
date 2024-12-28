import axios from 'axios';

const API_URL = 'https://canteen-management-system-9znm.onrender.com'; // Replace with your backend URL

// User Authentication
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

// Fetch Menu Items
export const fetchMenuItems = async () => {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data;
};

// Manage Orders
export const placeOrder = async (orderData) => {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
};

export const fetchOrderStatus = async (orderId) => {
    const response = await axios.get(`${API_URL}/orders/${orderId}`);
    return response.data;
};

// Update User Profile
export const updateUserProfile = async (userId, profileData) => {
    const response = await axios.put(`${API_URL}/users/${userId}`, profileData);
    return response.data;
};