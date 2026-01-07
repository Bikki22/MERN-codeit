import formatParams from "@/helpers/formatParams";
import { apiClient } from "./apiClient";

async function getProducts(searchParams) {
  const query = formatParams(searchParams);

  return await apiClient.customFetch(`/products`, {
    method: "GET",
    params: query,
  });
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

async function getBrands() {
  return await apiClient.customFetch(`/products/brands`);
}

async function getCategories() {
  return await apiClient.customFetch(`/products/categories`);
}

export {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getBrands,
  getCategories,
};
