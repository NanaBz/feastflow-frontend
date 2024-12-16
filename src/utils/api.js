import axios from 'axios';

const API_BASE_URL = 'https://canteen-management-system-9znm.onrender.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add logging for debugging
api.interceptors.request.use(request => {
  console.log('Starting Request:', request);
  return request;
});

api.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.error('API Error:', {
      url: error.config?.url,
      method: error.config?.method,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

// API endpoints
export const loginUser = (credentials) => api.post('/login', credentials);
export const createUser = (userData) => api.post('/create_new_user_info', userData);
export const getUserProfile = (userId) => api.get(`/get_user_info/${userId}`);
export const updateUserProfile = (userData) => api.put(`/update_user_info/${userData.id}`, userData);
export const getMenuItems = () => api.get('/get_menu_items');
export const createOrder = (orderData) => api.post('/create_order', orderData);
export const getUserOrders = (userId) => api.get(`/get_user_orders/${userId}`);

export default api;
