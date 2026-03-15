import apiClient from './apiClient';

const facilityService = {
    getAll: () => apiClient.get('/facilities'),
};

export default facilityService;
