// lib/paymentService.js
import apiClient from './apiClient';

/**
 * Creates a Stripe checkout session.
 * @param {object} data - The data for the checkout session (e.g., { plan: 'pro', price: 99 }).
 * @returns {Promise<object>} - The API response, which should include the session ID.
 */
export const createStripeCheckoutSession = async (data) => {
  const response = await apiClient.post('/payment/stripe/create-checkout-session', data);
  return response.data;
};
