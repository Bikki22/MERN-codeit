import { apiClient } from "./apiClient";

async function login({ email, password }) {
  return await apiClient.customFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

async function profile() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    throw new Error("No refresh token found. Please login");
  }

  return await apiClient.customFetch("/auth/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
}

export { login, profile };
