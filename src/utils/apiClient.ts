import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://tp136-production.up.railway.app/api',
  timeout: 5000,
});

export default apiClient;
