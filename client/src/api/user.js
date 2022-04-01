import axios from './axios';

const USERS_API = process.env.REACT_APP_BASE_API_URL_USERS;

export default {
  profile: {
    get: async _ => await axios.get(`${USERS_API}/profile`),
  },
}