// src/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:3001';

const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return token ? JSON.parse(token) : null;
};

const logout = () => {
  localStorage.removeItem('token');
};

const authService = {
  login,
  register,
  getCurrentUser,
  logout,
};

export default authService;