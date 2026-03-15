import apiClient from './apiClient';

const contactService = {
    get: () => apiClient.get('/contact'),
};

export default contactService;
