import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-for-sphereai.onrender.com';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/**
 * Creates a Razorpay payment order.
 * @param {object} orderDetails - The details of the order (e.g., amount, currency).
 * @returns {Promise<object>} - The response data from the API.
 */
export const createPaymentOrder = async (orderDetails) => {
  const response = await apiClient.post('/api/payment/create-order-razorpay', orderDetails);
  return response.data;
};

/**
 * Verifies a Razorpay payment.
 * @param {object} paymentDetails - The details of the payment to verify.
 * @returns {Promise<object>} - The response data from the API.
 */
export const verifyPayment = async (paymentDetails) => {
    const response = await apiClient.post('/api/payment/verify-payment-razorpay', paymentDetails);
    return response.data;
};
