import axios from "axios";
import Cookie from "js-cookie";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT
});
instance.interceptors.request.use(function(config) {
  const token = Cookie.get("token") ? Cookie.get("token") : null;
  if (token) {
    config.headers.authorization = token;
  }
  return config;
});

export const API = {
  POST: async (url, params, config) => {
    try {
      const response = await instance.post(url, params, config);
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
