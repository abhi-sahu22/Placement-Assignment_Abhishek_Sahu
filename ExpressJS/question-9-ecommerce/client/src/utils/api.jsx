import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

// User API routes
const AUTH_ROUTE = '/api/auth';
const USER_ROUTE = '/api/users';

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}${AUTH_ROUTE}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}${AUTH_ROUTE}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Get user profile
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}${USER_ROUTE}/profile`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}${USER_ROUTE}/profile`, userData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Get user order history
export const getUserOrderHistory = async () => {
  try {
    const response = await axios.get(`${API_URL}${USER_ROUTE}/orders`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Fetch product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
