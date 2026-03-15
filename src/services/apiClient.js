import axios from 'axios';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || '';

const apiClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor: Add token if available
apiClient.interceptors.request.use(
    (config) => {
        // Website might not have a token yet, but we'll add the hook for consistency
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor for cleaner data access
apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error.response?.data?.message || error.response?.data?.error || error.message;
        console.error('[API Error]:', message);
        return Promise.reject(error.response?.data || error);
    }
);

export default apiClient;
