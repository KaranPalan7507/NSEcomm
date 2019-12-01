import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
});
instance.interceptors.request.use(function(config) {
  return config;
});

export const API = {
  POST: async (url, params) => {
    try {
      const response = await instance.post(url, params);
      return { data: response.data, success: true };
    } catch (error) {
      return { success: false };
    }
  },
  PUT: async (url, params) => {
    try {
      const response = await instance.put(url, params);
      return { data: response.data, success: true };
    } catch (error) {
      return { success: false };
    }
  },
  GET: async (url, config) => {
    try {
      const response = await instance.get(url, config);
      return { data: response.data, success: true };
    } catch (error) {
      return { success: false };
    }
  },
  DELETE: async url => {
    try {
      const response = await instance.delete(url);
      return { data: response.data, success: true };
    } catch (error) {
      return { success: false };
    }
  }
};
