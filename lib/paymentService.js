// lib/paymentService.js
import apiClient from './apiClient';

// Note: All endpoints are updated to match the provided list.

export const createRazorpayOrder = async (data) => {
  const response = await apiClient.post('/payment/create-order-razorpay', data);
  return response.data;
};

export const verifyRazorpayPayment = async (data) => {
  const response = await apiClient.post('/payment/verify-payment-razorpay', data);
  return response.data;
};

export const createStripePaymentIntent = async (data) => {
  const response = await apiClient.post('/payment/create-payment-intent-stripe', data);
  return response.data;
};
