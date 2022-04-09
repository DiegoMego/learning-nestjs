/*
  Credits to https://javascript.plainenglish.io/handle-refresh-token-with-axios-1e0f45e9afa
  Article published on: Dec 30, 2021
*/

import axios, { AxiosResponse } from 'axios';

const AUTH_API = process.env.REACT_APP_BASE_API_URL_AUTH;

const instance = axios.create();

let refresingToken: Promise<AxiosResponse<any, any>> | null = null;

instance.interceptors.request.use((config: any) => {
  const coniguration = config;
  const token = instance.defaults.headers.common.Authorization;
  if (token) coniguration.headers.Authorization = token;
  return config;
});
instance.interceptors.response.use((response) => response, async (error) => {
  const { config } = error;
  if (error.response?.status === 401 && !config.retry) {
    config.retry = true;
    try {
      refresingToken = refresingToken || axios.get(`${AUTH_API}/refresh_token`);
      const res = await refresingToken;
      refresingToken = null;
      if (res.data.access_token) {
        instance.defaults.headers.common.Authorization = `Bearer ${res.data.access_token}`;
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return instance(config);
  }
  return Promise.reject(error);
});

export default instance;
