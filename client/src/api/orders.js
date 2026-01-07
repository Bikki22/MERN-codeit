import { apiClient } from "./apiClient";

async function getAllOrders() {
  return await apiClient.customFetch(`/orders`, {
    method: "GET",
  });
}

async function createOrder(data) {
  return await apiClient.customFetch(`/orders`, {
    method: "POST",
    data,
  });
}

async function getOrderByUser(status) {
  return await apiClient.customFetch(`/orders/user?status=${status}`);
}

async function deleteOrder(id) {
  return await apiClient.customFetch(`/orders/${id}`, {
    method: "DELETE",
  });
}
async function updateOrder(id, data) {
  return await apiClient.customFetch(`/orders/${id}`, {
    method: "PUT",
    data,
  });
}

export { createOrder, getOrderByUser, deleteOrder, updateOrder, getAllOrders };
