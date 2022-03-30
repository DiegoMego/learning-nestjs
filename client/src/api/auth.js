import axios from './axios';

const AUTH_API = process.env.REACT_APP_BASE_API_URL_AUTH;

export default {
  login: async (username, password) => await axios.post(`${AUTH_API}/login`, {username, password}),
  refresh_token: async _ => await axios.get(`${AUTH_API}/refresh_token`),
}