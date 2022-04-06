import axios from './axios';

const COMPANY_API = process.env.REACT_APP_BASE_API_URL_COMPANY;

export default {
  industries: {
    get: async _ => await axios.get(`${COMPANY_API}/industries`),
  },
  types: {
    get: async _ => await axios.get(`${COMPANY_API}/types`),
  },
}