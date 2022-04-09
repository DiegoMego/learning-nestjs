import axios from './axios';

const COMPANY_API = process.env.REACT_APP_BASE_API_URL_COMPANY;

export default {
  industries: {
    get: (): Promise<IResponse<SelectOption[]>> => axios.get(`${COMPANY_API}/industries`),
  },
  types: {
    get: (): Promise<IResponse<SelectOption[]>> => axios.get(`${COMPANY_API}/types`),
  },
  create: (payload: Company): Promise<any> => axios.post(`${COMPANY_API}/create`, {
    params: payload,
  }),
};