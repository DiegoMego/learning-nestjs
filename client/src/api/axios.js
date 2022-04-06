/*
  Credits to https://javascript.plainenglish.io/handle-refresh-token-with-axios-1e0f45e9afa
  Article published on: Dec 30, 2021
*/

import axios from 'axios';

const AUTH_API = process.env.REACT_APP_BASE_API_URL_AUTH;

const instance = axios.create();

let refresing_token = null;

instance.interceptors.request.use(function(config) {
  const token = instance.defaults.headers.common['Authorization'];
  if (token) config.headers.Authorization = token;
  return config;
});

instance.interceptors.response.use(function(response) {
  return response;
}, async function(error) {
  const config = error.config;
  console.log(JSON.stringify(error));
  if (error.response?.status === 401 && !config._retry) {
    config._retry = true;
    try {
      refresing_token = refresing_token ? refresing_token : axios.get(`${AUTH_API}/refresh_token`);
      let res = await refresing_token;
      refresing_token = null;
      if (res.data.access_token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
      }
    } catch (err) {
      return Promise.reject(err);
    }
    return instance(config);
  }
  return Promise.reject(error);
})

export default instance;