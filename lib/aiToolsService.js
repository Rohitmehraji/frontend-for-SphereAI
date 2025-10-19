// lib/aiToolsService.js
import apiClient from './apiClient';

/**
 * Generates a business plan.
 * @param {object} data - The data needed to generate the plan (e.g., { description: '...' }).
 * @returns {Promise<object>} - The API response.
 */
export const generateBusinessPlan = async (data) => {
  const response = await apiClient.post('/tools/business_plan', data);
  return response.data;
};

/**
 * Performs market research.
 * @param {object} data - The data for the research (e.g., { topic: '...' }).
 * @returns {Promise<object>} - The API response.
 */
export const performMarketResearch = async (data) => {
  const response = await apiClient.post('/tools/market_research', data);
  return response.data;
};

/**
 * Generates a financial forecast.
 * @param {object} data - The financial data.
 * @returns {Promise<object>} - The API response.
 */
export const generateFinancialForecast = async (data) => {
  const response = await apiClient.post('/tools/financial_forecast', data);
  return response.data;
};
