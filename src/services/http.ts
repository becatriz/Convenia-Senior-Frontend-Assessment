import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_URL_API as string;

const $http = axios.create({
  baseURL: BASE_URL,
});

export default {
  async get(endpoint: string) {
    try {
      return await $http.get(`${BASE_URL}${endpoint}`);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },

  async post(endpoint: string, data = {}) {
    try {
      return await $http.post(`${BASE_URL}${endpoint}`, data);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },

  async put(endpoint: string, data = {}) {
    try {
      return await $http.put(`${BASE_URL}${endpoint}`, data);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  },
};
