// lib/aiToolsService.js
import apiClient from './apiClient';

// Note: All endpoints are updated to match the provided list.

export const generateBusinessPlan = async (data) => {
  const response = await apiClient.post('/tools/generate-business-plan', data);
  return response.data;
};

export const exportBusinessPlanPdf = async (data) => {
  const response = await apiClient.post('/tools/export-business-plan-pdf', data, {
    responseType: 'blob', // Important for file downloads
  });
  return response.data;
};

export const buildChatbot = async (data) => {
  const response = await apiClient.post('/tools/chatbot-builder', data);
  return response.data;
};

export const generateContent = async (data) => {
  const response = await apiClient.post('/tools/content-generator', data);
  return response.data;
};

export const getCustomerSupportResponse = async (data) => {
  const response = await apiClient.post('/tools/customer-support', data);
  return response.data;
};

export const generateFinancialForecast = async (data) => {
  const response = await apiClient.post('/tools/financial-forecast', data);
  return response.data;
};

export const performMarketResearch = async (data) => {
  const response = await apiClient.post('/tools/market-research', data);
  return response.data;
};

export const generatePitchDeck = async (data) => {
  const response = await apiClient.post('/tools/pitch-deck', data);
  return response.data;
};

export const manageTasks = async (data) => {
  const response = await apiClient.post('/tools/task-manager', data);
  return response.data;
};

export const analyzeTimeUsage = async (data) => {
    const response = await apiClient.post('/tools/analyze-time-usage', data);
    return response.data;
};

export const optimizeCalendar = async (data) => {
    const response = await apiClient.post('/tools/calendar-optimization', data);
    return response.data;
};
