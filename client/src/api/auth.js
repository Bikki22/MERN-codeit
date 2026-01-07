import { apiClient } from "./apiClient";

async function login({ email, password }) {
  return await apiClient.customFetch("/auth/login", {
    method: "POST",
    data: JSON.stringify({ email, password }),
  });
}

async function register({
  username,
  email,
  password,
  confirmPassword,
  phone,
  provience,
  city,
  street,
}) {
  return await apiClient.customFetch("/auth/login", {
    method: "POST",
    data: JSON.stringify({
      username,
      email,
      password,
      confirmPassword,
      phone,
      provience,
      city,
      street,
    }),
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

export { login, profile, register };
