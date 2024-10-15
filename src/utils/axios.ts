// axiosClient.ts
import axios, { AxiosInstance } from "axios";

// Create an Axios instance
const axiosClient: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "https://dev.giftwise.in/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;
