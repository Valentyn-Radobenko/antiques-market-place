import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tp136-production.up.railway.app/api',
  timeout: 15000,
});

export default apiClient;
