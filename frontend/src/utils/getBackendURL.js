// Helper function to get backend URL based on environment
export const getBackendURL = () => {
  // For production on Vercel, use the internal service route
  if (import.meta.env.PROD) {
    return '/_/backend';
  }
  // For development, use environment variable or fallback to localhost
  return import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
};

export default getBackendURL;
