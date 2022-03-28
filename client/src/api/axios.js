import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(function(config) {
  const token = instance.defaults.headers.common['Authorization'];
  if (token) config.headers.Authorization = token;
  return config;
});

export default instance;