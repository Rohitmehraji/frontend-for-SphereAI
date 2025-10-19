// lib/billingService.js
import { subscriptionDetails, transactionHistory } from './placeholderData';
import apiClient from './apiClient';

// *** Placeholder Implementation ***
// In the future, replace the placeholder data with live API calls.
// Example:
// export const getSubscriptionDetails = async () => {
//   const response = await apiClient.get('/user/subscription');
//   return response.data;
// };

export const getSubscriptionDetails = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return subscriptionDetails;
};

export const getTransactionHistory = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return transactionHistory;
};

export const cancelSubscription = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, you would post to an endpoint like '/user/subscription/cancel'
    return { success: true, message: 'Subscription cancelled successfully.' };
};
