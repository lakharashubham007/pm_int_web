import apiClient from './apiClient';

const programService = {
    getAll: () => apiClient.get('/programs'),
};

export default programService;
