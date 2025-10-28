// lib/additionalToolsService.js
import apiClient from './apiClient';

export const generatePitchDeck = async (data) => {
    const response = await apiClient.post('/tools/pitch_deck', data);
    return response.data;
};

export const generateContent = async (data) => {
    const response = await apiClient.post('/tools/content_generator', data);
    return response.data;
};

export const buildChatbot = async (data) => {
    const response = await apiClient.post('/tools/chatbot_builder', data);
    return response.data;
};

export const getCustomerSupportResponse = async (data) => {
    const response = await apiClient.post('/tools/customer_support', data);
    return response.data;
};

export const manageTasks = async (data) => {
    const response = await apiClient.post('/tools/task_manager', data);
    return response.data;
};

export const manageTime = async (data) => {
    const response = await apiClient.post('/tools/time_management', data);
    return response.data;
};
