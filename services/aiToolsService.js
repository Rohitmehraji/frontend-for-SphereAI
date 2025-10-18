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
// …repeat for all other tool endpoints as shown above…

export default {
  generateBusinessPlan,
  exportBusinessPlanPDF,
  // ...other exports from above
};
