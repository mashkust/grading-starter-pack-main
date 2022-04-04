import axios from 'axios';
import {getToken} from './token';

const BACKEND_URL = 'http://localhost:3001';
const REQUEST_TIMEOUT = 5000;

export const createAPI = ()=> {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};
