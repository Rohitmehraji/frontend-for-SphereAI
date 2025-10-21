// lib/api.js
import apiClient from './apiClient';

/**
 * Logs in a user.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<object>} - The response data from the API.
 */
export const loginUser = async (email, password) => {
  const response = await apiClient.post('/auth/login', { email, password });
  if (response.data && response.data.token) {
    localStorage.setItem('authToken', response.data.token);
  }
  return response.data;
};

/**
 * Registers a new user.
 * @param {string} fullName - The user's full name.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<object>} - The response data from the API.
 */
export const registerUser = async (fullName, email, password) => {
  const response = await apiClient.post('/auth/register', { fullName, email, password });
  return response.data;
};

/**
 * Logs out the current user by removing the auth token.
 */
export const logoutUser = () => {
  localStorage.removeItem('authToken');
};
