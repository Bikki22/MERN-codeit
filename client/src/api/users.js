import axios from "axios";
import { apiClient } from "./apiClient";

async function getAllUsers() {
  return await apiClient.customFetch(`/users/all`, {
    method: "GET",
  });
}

async function getUserById(id) {
  return await apiClient.customFetch(`/users/${id}`, {
    method: "GET",
  });
}

async function createUser(user) {
  return await apiClient.customFetch(`/users/create`, {
    method: "POST",
    data: user,
  });
}

async function updateUser(id, user) {
  return await apiClient.customFetch(`/users/${id}`, {
    method: "PUT",
    data: user,
  });
}

async function deleteUser(id) {
  return await apiClient.customFetch(`/users/${id}`, {
    method: "DELETE",
  });
}

function updateProfileImage(id, file) {
  return axios.patch(`http://localhost:5000/api/v1/users/profile-image/${id}`, {
    profileImage: file,
  });
}

// 25:49

export {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateProfileImage,
};
