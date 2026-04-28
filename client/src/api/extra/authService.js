import { StorageKeys } from "@/utils/constants";
import axiosInstance from "./axios";

const authService = {
  register: async (userData) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await axiosInstance.post("/auth/login", credentials);

    if (response.data?.accessToken) {
      localStorage.setItem(StorageKeys.ACCESS_TOKEN, response.data.accessToken);
    }
    if (response.data?.refreshToken) {
      localStorage.setItem(
        StorageKeys.REFRESH_TOKEN,
        response.data.refreshToken,
      );
    }

    return response.data;
  },

  logout: async function (userData) {
    const response = await axiosInstance.delete("/auth/logout", userData);
    localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
    localStorage.removeItem(StorageKeys.REFRESH_TOKEN);
    return response.data;
  },
};

export default authService;
