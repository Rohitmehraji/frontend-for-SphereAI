
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-for-shereai-2.onrender.com';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const buildChatbot = (data) => apiClient.post('/api/tools/chatbot-builder', data);
export const generateContent = (data) => apiClient.post('/api/tools/content-generator', data);
export const buildPitchDeck = (data) => apiClient.post('/api/tools/pitch-deck', data);
export const manageTasks = (data) => apiClient.post('/api/tools/task-manager', data);
export const manageTime = (data) => apiClient.post('/api/tools/time-manager', data);
