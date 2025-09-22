import { apiClient } from "./apiClient";

export function login({ email, password }) {
  return apiClient.customFetch("/login", {
    email,
    password,
  });
}
