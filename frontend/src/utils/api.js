// API Configuration for Frontend
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export const API = {
  BASE: API_BASE_URL,
  ENDPOINTS: {
    // Auth
    AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
    AUTH_REGISTER: `${API_BASE_URL}/api/auth/register`,
    
    // Chatbot
    CHATBOT_CHAT: `${API_BASE_URL}/api/chatbot/chat-smart`,
    
    // Real Places
    REAL_PLACES: `${API_BASE_URL}/api/real-places/destination`,
    
    // QR Code
    QR_PROCESS: `${API_BASE_URL}/api/process-qr`,
  }
};

export default API;
