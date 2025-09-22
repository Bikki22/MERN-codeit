import config from "@/config";
import axios from "axios";

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: `${config.apiUrl}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: true,
    });
  }

  async customFetch(endpoint, options = {}) {
    try {
      const method = options.method || "get";
      const url = endpoint;

      const config = {
        url,
        method,
        headers: options.headers,
        data: options.body,
        params: options.params,
      };

      const response = await this.client(config);
      return response.data;
    } catch (error) {
      throw {
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
        data: error.response?.data,
      };
    }
  }
}
export const apiClient = new ApiClient();
