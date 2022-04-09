import axios from './axios';

const AUTH_API = process.env.REACT_APP_BASE_API_URL_AUTH;

export default {
  login: (username: string, password: string) => axios.post(`${AUTH_API}/login`, { username, password }),
  refresh_token: () => axios.get(`${AUTH_API}/refresh_token`),
};
