import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createApiInstance = (): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: "https://api.allorigins.win/get?url=https://cdn-dev.preoday.com/challenge",
    timeout: 60 * 1000
  };

  const instance = axios.create(config);
  return instance;
};

const api = createApiInstance();

export default api;
