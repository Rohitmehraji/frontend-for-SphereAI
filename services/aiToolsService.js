import axios from 'axios';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-for-shereai-2.onrender.com';
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
// API methods for all tools here (from above)
export const generateBusinessPlan = async (data) => apiClient.post('/api/tools/generate-business-plan', data).then(r => r.data);
export const exportBusinessPlanPDF = async (data) => apiClient.post('/api/tools/export-business-plan-pdf', data).then(r => r.data);
export const buildChatbot = async (data) => apiClient.post('/api/tools/chatbot-builder', data).then(r => r.data);
export const generateContent = async (data) => apiClient.post('/api/tools/content-generator', data).then(r => r.data);
export const getCustomerSupportResponse = async (data) => apiClient.post('/api/tools/customer-support', data).then(r => r.data);
export const forecastFinancials = async (data) => apiClient.post('/api/tools/financial-forecast', data).then(r => r.data);
export const researchMarket = async (data) => apiClient.post('/api/tools/market-research', data).then(r => r.data);
export const buildPitchDeck = async (data) => apiClient.post('/api/tools/pitch-deck', data).then(r => r.data);
export const manageTasks = async (data) => apiClient.post('/api/tools/task-manager', data).then(r => r.data);
export const optimizeCalendar = async (data) => apiClient.post('/api/tools/calendar-optimization', data).then(r => r.data);


export default {
  generateBusinessPlan,
  exportBusinessPlanPDF,
  buildChatbot,
  generateContent,
  getCustomerSupportResponse,
  forecastFinancials,
  researchMarket,
  buildPitchDeck,
  manageTasks,
  optimizeCalendar,
};
