// lib/dashboardService.js
import { dashboardKPIs, revenueChartData, userGrowthData, activityFeed } from './placeholderData';
import apiClient from './apiClient';


// *** Placeholder Implementation ***
// In the future, replace the placeholder data with live API calls.
// Example:
// export const getDashboardKPIs = async () => {
//   const response = await apiClient.get('/dashboard/kpis');
//   return response.data;
// };

export const getDashboardKPIs = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return dashboardKPIs;
};

export const getRevenueChartData = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return revenueChartData;
};

export const getUserGrowthData = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return userGrowthData;
};

export const getActivityFeed = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return activityFeed;
};
