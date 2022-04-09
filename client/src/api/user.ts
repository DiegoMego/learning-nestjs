import axios from './axios';

const USERS_API = process.env.REACT_APP_BASE_API_URL_USERS;

type UserProfile = {
  FirstName: string,
  LastName: string,
}

export default {
  profile: {
    get: (): Promise<IResponse<UserProfile>> => axios.get(`${USERS_API}/profile`),
  },
};
