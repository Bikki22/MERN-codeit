import { apiClient } from "./apiClient";

async function getProducts() {
  return await apiClient.customFetch("/products");
}

async function getProductById(id) {
  return await apiClient.customFetch(`/products/${id}`);
}

async function createProduct(data) {
  return await apiClient.customFetch("/products", {
    method: "POST",
    data,
  });
}

async function updateProduct(id, data) {
  return await apiClient.customFetch(`/products/${id}`, {
    method: "PUT",
    data,
  });
}
async function deleteProduct(id) {
  return await apiClient.customFetch(`/products/${id}`, {
    method: "DELETE",
  });
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
