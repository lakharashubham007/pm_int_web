import apiClient from './apiClient';

const admissionService = {
    submit: (formData) => apiClient.post('/admissions', formData),
};

export default admissionService;
