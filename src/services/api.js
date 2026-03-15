import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// For public API calls
export const publicApi = {
    getPrograms: async () => {
        const { data } = await api.get('/programs');
        return data;
    },
    submitAdmission: async (formData) => {
        const { data } = await api.post('/admissions', formData);
        return data;
    },
};

export default api;
