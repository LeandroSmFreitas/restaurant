import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const createApiInstance = (): AxiosInstance => {
  const config: AxiosRequestConfig = {
    baseURL: "http://localhost:5173/api/challenge/",
    timeout: 6000000
  };

  const instance = axios.create(config);
  return instance;
};

const api = createApiInstance();

export default api;
