import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://color-pal-backend-1.onrender.com/api',
  withCredentials:true,
});

export default axiosInstance;